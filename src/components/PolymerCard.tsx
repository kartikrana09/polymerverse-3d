import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Polymer } from '@/data/polymers';
import { Atom, Sparkles } from 'lucide-react';

interface PolymerCardProps {
  polymer: Polymer;
  index: number;
}

export default function PolymerCard({ polymer, index }: PolymerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
    >
      <Link to={`/polymer/${polymer.id}`}>
        <Card className="relative overflow-hidden h-full cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] border-2 border-primary/30 hover:border-primary/60 bg-card/50 backdrop-blur-md group">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image section with 3D molecule */}
          {polymer.image2D && (
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
              <motion.img
                src={polymer.image2D}
                alt={polymer.name}
                className="w-full h-full object-contain p-4"
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                loading="lazy"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            </div>
          )}
          
          {/* Content */}
          <div className="relative z-10 p-6 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-500 flex-1">
                {polymer.name}
              </h3>
              <Sparkles className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge className="neon-border bg-primary/10 text-primary hover:bg-primary/20 font-mono text-xs">
                {polymer.formula}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-secondary/10">
                {polymer.molarMass}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Atom className="h-3 w-3" />
                <span>Key Applications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {polymer.uses.slice(0, 3).map((use, i) => (
                  <Badge key={i} variant="outline" className="text-xs border-primary/20 hover:border-primary/40 transition-colors">
                    {use}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {polymer.synthesis}
            </p>
            
            {/* View details indicator */}
            <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Atom className="h-4 w-4 animate-pulse" />
              <span className="font-medium">View Details</span>
            </div>
          </div>
          
          {/* Corner glows */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Card>
      </Link>
    </motion.div>
  );
}
