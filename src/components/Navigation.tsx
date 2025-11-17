import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, User, Shield, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { samplePolymers, polymerCategories } from '@/data/polymers';
import { supabase } from '@/integrations/supabase/client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (user) {
      checkAdminStatus(user.id);
    }
  };

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single();
    
    setIsAdmin(!!data);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 glass-effect backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">
              PolyWorld
            </div>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-primary/10">
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-effect border-primary/20" align="end">
                {polymerCategories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => navigate(`/category/${category.id}`)}
                    className="cursor-pointer hover:bg-primary/10"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10"
              onClick={() => setOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {user.email?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 glass-effect border-primary/20" align="end">
                  <div className="px-2 py-2 text-sm text-muted-foreground">
                    {user.email}
                  </div>
                  {isAdmin && (
                    <DropdownMenuItem
                      onClick={() => navigate('/admin')}
                      className="cursor-pointer hover:bg-primary/10"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer hover:bg-destructive/10 text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
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
