import { Shapes } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Shapes className="h-7 w-7 text-primary" />
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        Cymbal Retail
      </span>
    </div>
  );
}
