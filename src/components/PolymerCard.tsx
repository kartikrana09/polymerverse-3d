import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Polymer } from '@/data/polymers';

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
    >
      <Link to={`/polymer/${polymer.id}`}>
        <Card className="p-6 h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] border-primary/30 bg-card/50 backdrop-blur-sm group">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-primary group-hover:text-neon-cyan transition-colors">
                {polymer.name}
              </h3>
              <Badge variant="outline" className="border-secondary text-secondary">
                {polymer.category}
              </Badge>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Formula:</span> {polymer.formula}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Molar Mass:</span> {polymer.molarMass}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">Key Uses:</p>
              <div className="flex flex-wrap gap-2">
                {polymer.uses.slice(0, 3).map((use, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {use}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground line-clamp-2">
              {polymer.synthesis}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
