import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function RecruitmentBanner() {
  return (
    <div className="rounded-lg bg-card p-8 text-center shadow-sm">
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground">
        Want to work with us?
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
        We're always on the lookout for talented individuals to join our team. If you're passionate about fashion, technology, and innovation, we'd love to hear from you.
      </p>
      <Button size="lg">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
