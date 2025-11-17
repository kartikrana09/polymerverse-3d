import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { samplePolymers, polymerCategories } from '@/data/polymers';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const getCategoryName = (categoryId: string) => {
    return polymerCategories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">
              PolyWorld
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10"
              onClick={() => setOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search polymers..." />
        <CommandList>
          <CommandEmpty>No polymers found.</CommandEmpty>
          <CommandGroup heading="Polymers">
            {samplePolymers.map((polymer) => (
              <CommandItem
                key={polymer.id}
                value={`${polymer.name} ${polymer.formula} ${getCategoryName(polymer.category)}`}
                onSelect={() => {
                  setOpen(false);
                  navigate(`/polymer/${polymer.id}`);
                }}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{polymer.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {getCategoryName(polymer.category)} • {polymer.formula}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
