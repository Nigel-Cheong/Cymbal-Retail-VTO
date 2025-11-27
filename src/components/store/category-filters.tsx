import { type Category } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
        <Button
          variant={selectedCategory === null ? 'default' : 'outline'}
          className="shrink-0 rounded-full"
          onClick={() => onSelectCategory(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.name ? 'default' : 'outline'}
            className="shrink-0 rounded-full"
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
