import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import MolecularBackground from '@/components/MolecularBackground';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { samplePolymers, polymerCategories } from '@/data/polymers';
import { useMemo } from 'react';

function MoleculeVisualization() {
  const atoms = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      positions.push([
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ]);
    }
    return positions;
  }, []);

  const bonds = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < atoms.length - 1; i++) {
      if (Math.random() > 0.5) {
        pairs.push([atoms[i], atoms[i + 1]]);
      }
    }
    return pairs;
  }, [atoms]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {atoms.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.15, 16, 16]}>
          <meshStandardMaterial 
            color={i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#a855f7' : '#00ff00'} 
            emissive={i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#a855f7' : '#00ff00'}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
      {bonds.map((bond, i) => (
        <Line
          key={i}
          points={bond}
          color="#ffffff"
          lineWidth={2}
          opacity={0.6}
          transparent
        />
      ))}
      <OrbitControls enableZoom={true} enablePan={true} />
    </>
  );
}

export default function PolymerDetailPage() {
  const { polymerId } = useParams();
  const polymer = samplePolymers.find(p => p.id === polymerId);
  const category = polymer ? polymerCategories.find(c => c.id === polymer.category) : null;

  if (!polymer || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MolecularBackground />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Polymer Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <MolecularBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Link to={`/category/${polymer.category}`}>
          <Button variant="ghost" className="mb-6 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {category.name}
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {polymer.name}
              </h1>
              <p className="text-xl text-muted-foreground">{polymer.formula}</p>
            </div>
            <Badge variant="outline" className="text-lg border-secondary text-secondary">
              {category.icon} {category.name}
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
              <h2 className="text-2xl font-bold mb-4 text-primary">3D Molecular Structure</h2>
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20 bg-background/50">
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                  <MoleculeVisualization />
                </Canvas>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Click and drag to rotate • Scroll to zoom
              </p>
            </Card>
          </motion.div>

          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/30 h-full">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Molar Mass</p>
                  <p className="text-lg">{polymer.molarMass}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Structure</p>
                  <p className="text-lg">{polymer.structure}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Synthesis</p>
                  <p className="text-lg">{polymer.synthesis}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Information Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="properties" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="uses">Applications</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
            </TabsList>

            <TabsContent value="properties">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
                <h3 className="text-xl font-bold mb-4 text-primary">Physical & Chemical Properties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(polymer.properties).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-lg bg-background/30 border border-border">
                      <p className="text-sm font-semibold text-muted-foreground capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-lg">{value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="uses">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/30">
                <h3 className="text-xl font-bold mb-4 text-secondary">Applications & Uses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {polymer.uses.map((use, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/30 border border-border">
                      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <p>{use}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analysis">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-accent">Advantages</h3>
                    <div className="space-y-2">
                      {polymer.advantages.map((adv, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/30 border border-border">
                          <span className="text-accent text-xl flex-shrink-0">✓</span>
                          <p>{adv}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-destructive">Limitations</h3>
                    <div className="space-y-2">
                      {polymer.limitations.map((lim, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/30 border border-border">
                          <span className="text-destructive text-xl flex-shrink-0">✗</span>
                          <p>{lim}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="environmental">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30">
                <h3 className="text-xl font-bold mb-4 text-accent">Environmental Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(polymer.environmentalImpact).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-lg bg-background/30 border border-border">
                      <p className="text-sm font-semibold text-muted-foreground capitalize mb-2">
                        {key}
                      </p>
                      <p className="text-lg">{value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}
