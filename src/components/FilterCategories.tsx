
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FilterCategoriesProps {
  className?: string;
}

const FilterCategories = ({ className }: FilterCategoriesProps) => {
  const categories = [
    { name: "All", active: true },
    { name: "Technology", active: false },
    { name: "Business", active: false },
    { name: "Culture", active: false },
    { name: "Design", active: false },
  ];

  return (
    <div className={cn("mb-6", className)}>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
        <span className="font-medium">Filter by Category</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={category.active ? "default" : "outline"}
            className={cn("rounded-full text-sm py-1 h-auto", 
              category.active ? "bg-primary text-primary-foreground" : ""
            )}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterCategories;
