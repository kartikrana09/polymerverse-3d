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
    cyan: 'from-neon-cyan/20 to-neon-cyan/5 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] border-neon-cyan/30 hover:border-neon-cyan/60',
    purple: 'from-neon-purple/20 to-neon-purple/5 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] border-neon-purple/30 hover:border-neon-purple/60',
    lime: 'from-neon-green/20 to-neon-green/5 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] border-neon-green/30 hover:border-neon-green/60',
    pink: 'from-accent/20 to-accent/5 hover:shadow-[0_0_40px_rgba(219,39,119,0.4)] border-accent/30 hover:border-accent/60',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Link to={`/category/${id}`}>
        <Card 
          className={`
            relative overflow-hidden p-8 h-full cursor-pointer transition-all duration-500
            bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]}
            border-2 backdrop-blur-md
            group
          `}
        >
          {/* Animated glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <motion.div 
              className="text-6xl mb-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {icon}
            </motion.div>
            
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary group-hover:from-primary group-hover:to-accent transition-all duration-300">
              {name}
            </h3>
            
            {/* Animated underline */}
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Corner accent glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Card>
      </Link>
    </motion.div>
  );
}
