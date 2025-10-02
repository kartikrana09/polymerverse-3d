import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MolecularBackground from '@/components/MolecularBackground';
import Navigation from '@/components/Navigation';
import PolymerCard from '@/components/PolymerCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { polymerCategories, samplePolymers } from '@/data/polymers';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = polymerCategories.find(c => c.id === categoryId);
  const polymers = samplePolymers.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MolecularBackground />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
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
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{category.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              {category.name}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Explore {polymers.length} polymer{polymers.length !== 1 ? 's' : ''} in this category
          </p>
        </motion.div>

        {polymers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polymers.map((polymer, index) => (
              <PolymerCard key={polymer.id} polymer={polymer} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔬</div>
            <h2 className="text-2xl font-bold mb-2 text-muted-foreground">
              More polymers coming soon!
            </h2>
            <p className="text-muted-foreground">
              We're continuously adding new polymers to this category.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
