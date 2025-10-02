import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  color: string;
  index: number;
}

export default function CategoryCard({ id, name, icon, color, index }: CategoryCardProps) {
  const colorClasses = {
    cyan: 'from-neon-cyan/20 to-neon-cyan/5 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] border-neon-cyan/30',
    purple: 'from-neon-purple/20 to-neon-purple/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] border-neon-purple/30',
    lime: 'from-neon-lime/20 to-neon-lime/5 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] border-neon-lime/30',
    pink: 'from-neon-pink/20 to-neon-pink/5 hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] border-neon-pink/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/category/${id}`}>
        <Card 
          className={`
            p-6 h-full cursor-pointer transition-all duration-300
            bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]}
            hover:scale-105 border-2 backdrop-blur-sm
            group
          `}
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
