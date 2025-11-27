import { Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './logo';
import { Button } from '../ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="opacity-80" />
          <p className="text-sm text-muted-foreground">
            &copy; {year} Cymbal Retail. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
