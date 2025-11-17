import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import MolecularBackground from '@/components/MolecularBackground';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Shield, Plus, LogOut } from 'lucide-react';
import { polymerCategories } from '@/data/polymers';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    formula: '',
    molarMass: '',
    structure: '',
    synthesis: '',
    image2D: '',
    image3D: '',
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate('/auth');
      return;
    }

    setUser(user);

    // Check if user is admin
    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();

    if (!roles) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
      return;
    }

    setIsAdmin(true);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase.from('polymers_data').insert({
      id: formData.id,
      name: formData.name,
      category: formData.category,
      formula: formData.formula,
      molar_mass: formData.molarMass,
      structure: formData.structure,
      synthesis: formData.synthesis,
      properties: {},
      uses: [],
      advantages: [],
      limitations: [],
      environmental_impact: {},
      image_2d: formData.image2D,
      image_3d: formData.image3D,
      created_by: user?.id,
    });

    if (error) {
      toast.error('Failed to add polymer: ' + error.message);
    } else {
      toast.success('Polymer added successfully!');
      setFormData({
        id: '',
        name: '',
        category: '',
        formula: '',
        molarMass: '',
        structure: '',
        synthesis: '',
        image2D: '',
        image3D: '',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen relative">
      <MolecularBackground />
      <Navigation />
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-4xl font-bold gradient-text">
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground mt-1">
                  Manage polymer database
                </p>
              </div>
            </div>
            
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-primary/20 hover:bg-primary/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <Card className="glass-effect card-glow p-8 border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <Plus className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Add New Polymer</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="id">Polymer ID *</Label>
                  <Input
                    id="id"
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    required
                    placeholder="e.g., polyethylene"
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="e.g., Polyethylene (PE)"
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="bg-background/50 border-primary/20">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {polymerCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="formula">Chemical Formula *</Label>
                  <Input
                    id="formula"
                    value={formData.formula}
                    onChange={(e) => setFormData({ ...formData, formula: e.target.value })}
                    required
                    placeholder="e.g., (C₂H₄)ₙ"
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="molarMass">Molar Mass *</Label>
                  <Input
                    id="molarMass"
                    value={formData.molarMass}
                    onChange={(e) => setFormData({ ...formData, molarMass: e.target.value })}
                    required
                    placeholder="e.g., 28.05 g/mol"
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image2D">2D Image URL</Label>
                  <Input
                    id="image2D"
                    value={formData.image2D}
                    onChange={(e) => setFormData({ ...formData, image2D: e.target.value })}
                    placeholder="/src/assets/polymers/..."
                    className="bg-background/50 border-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="structure">Structure *</Label>
                <Textarea
                  id="structure"
                  value={formData.structure}
                  onChange={(e) => setFormData({ ...formData, structure: e.target.value })}
                  required
                  placeholder="Describe the molecular structure..."
                  className="bg-background/50 border-primary/20 min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="synthesis">Synthesis *</Label>
                <Textarea
                  id="synthesis"
                  value={formData.synthesis}
                  onChange={(e) => setFormData({ ...formData, synthesis: e.target.value })}
                  required
                  placeholder="Describe the synthesis process..."
                  className="bg-background/50 border-primary/20 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Polymer
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
