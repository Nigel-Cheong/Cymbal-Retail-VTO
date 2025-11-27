import Logo from './logo';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchQueryChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
