-- Create storage bucket for polymer images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('polymer-images', 'polymer-images', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/webp']);

-- Allow public read access to polymer images
CREATE POLICY "Public read access for polymer images"
ON storage.objects FOR SELECT
USING (bucket_id = 'polymer-images');

-- Allow authenticated admins to upload polymer images
CREATE POLICY "Admins can upload polymer images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'polymer-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Allow authenticated admins to update polymer images
CREATE POLICY "Admins can update polymer images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'polymer-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Allow authenticated admins to delete polymer images
CREATE POLICY "Admins can delete polymer images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'polymer-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);