import { motion } from 'framer-motion';
import MolecularBackground from '@/components/MolecularBackground';
import Navigation from '@/components/Navigation';
import CategoryCard from '@/components/CategoryCard';
import { polymerCategories } from '@/data/polymers';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MolecularBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text animate-glow">PolyWorld</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore the fascinating universe of polymers through interactive 3D visualizations
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
              <span>16 Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-purple animate-pulse" />
              <span>320+ Polymers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-lime animate-pulse" />
              <span>3D Models</span>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            Polymer Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {polymerCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                {...category}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-2">🔬</div>
            <h3 className="text-xl font-bold text-primary">Detailed Data</h3>
            <p className="text-muted-foreground text-sm">
              Complete information on synthesis, properties, and applications
            </p>
          </div>
          <div className="text-center space-y-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 transition-all">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="text-xl font-bold text-secondary">3D Visualization</h3>
            <p className="text-muted-foreground text-sm">
              Interactive molecular structures you can rotate and explore
            </p>
          </div>
          <div className="text-center space-y-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-all">
            <div className="text-4xl mb-2">🌍</div>
            <h3 className="text-xl font-bold text-accent">Sustainability</h3>
            <p className="text-muted-foreground text-sm">
              Environmental impact analysis for every polymer
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
