import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Polymer {
  id: string;
  name: string;
  formula: string;
  structure: string;
  image2D?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!

    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: { headers: { Authorization: authHeader } }
    })

    // Verify admin role
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single()

    if (!roleData) {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { batch = 20 } = await req.json().catch(() => ({ batch: 20 }))

    // Fetch polymers that need images (limiting to batch size)
    const { data: polymers, error: fetchError } = await supabase
      .from('polymers_data')
      .select('id, name, formula, structure, image_2d')
      .is('image_2d', null)
      .limit(batch)

    if (fetchError) {
      throw new Error(`Failed to fetch polymers: ${fetchError.message}`)
    }

    if (!polymers || polymers.length === 0) {
      return new Response(JSON.stringify({ 
        message: 'No polymers need images',
        processed: 0 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    console.log(`Generating images for ${polymers.length} polymers...`)

    // Generate images for each polymer
    const results = []
    for (const polymer of polymers) {
      try {
        const prompt = `Scientific 2D chemical structure diagram of ${polymer.name} with formula ${polymer.formula}. ${polymer.structure}. Clean white background, professional chemistry textbook style, skeletal formula representation with clear bond angles and proper chemical notation. Ultra high resolution, 2:1 aspect ratio.`

        console.log(`Generating image for ${polymer.name}...`)

        const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lovableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-3-pro-image-preview',
            messages: [
              {
                role: 'user',
                content: prompt
              }
            ],
            modalities: ['image', 'text']
          })
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error(`Failed to generate image for ${polymer.name}:`, errorText)
          results.push({ 
            id: polymer.id, 
            name: polymer.name,
            success: false, 
            error: `API error: ${response.status}` 
          })
          continue
        }

        const data = await response.json()
        const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url

        if (!imageUrl) {
          console.error(`No image URL returned for ${polymer.name}`)
          results.push({ 
            id: polymer.id, 
            name: polymer.name,
            success: false, 
            error: 'No image URL in response' 
          })
          continue
        }

        // Extract base64 data
        const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, '')
        const imageBuffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0))

        // Upload to storage
        const fileName = `${polymer.id}-2d.png`
        const { error: uploadError } = await supabase.storage
          .from('polymer-images')
          .upload(fileName, imageBuffer, {
            contentType: 'image/png',
            upsert: true
          })

        if (uploadError) {
          // Try to create bucket if it doesn't exist
          if (uploadError.message.includes('not found')) {
            const { error: bucketError } = await supabase.storage.createBucket('polymer-images', {
              public: true
            })
            
            if (!bucketError) {
              // Retry upload
              const { error: retryError } = await supabase.storage
                .from('polymer-images')
                .upload(fileName, imageBuffer, {
                  contentType: 'image/png',
                  upsert: true
                })
              
              if (retryError) {
                throw retryError
              }
            } else {
              throw uploadError
            }
          } else {
            throw uploadError
          }
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('polymer-images')
          .getPublicUrl(fileName)

        // Update polymer record with image URL
        const { error: updateError } = await supabase
          .from('polymers_data')
          .update({ image_2d: publicUrl })
          .eq('id', polymer.id)

        if (updateError) {
          throw updateError
        }

        console.log(`Successfully generated image for ${polymer.name}`)
        results.push({ 
          id: polymer.id, 
          name: polymer.name,
          success: true, 
          imageUrl: publicUrl 
        })

      } catch (error) {
        console.error(`Error generating image for ${polymer.name}:`, error)
        results.push({ 
          id: polymer.id, 
          name: polymer.name,
          success: false, 
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    const successful = results.filter(r => r.success).length
    const failed = results.filter(r => !r.success).length

    return new Response(JSON.stringify({ 
      message: `Processed ${polymers.length} polymers`,
      successful,
      failed,
      results
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
