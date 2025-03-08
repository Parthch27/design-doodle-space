
import { TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PopularSectionProps {
  className?: string;
}

const PopularSection = ({ className }: PopularSectionProps) => {
  const popularItems = [
    { title: "Design System", views: 4582, progress: 92 },
    { title: "Wireframing Guide", views: 3728, progress: 76 },
    { title: "Component Library", views: 2914, progress: 58 },
    { title: "Responsive Layouts", views: 1839, progress: 36 },
  ];

  return (
    <div className={cn("w-full animate-slide-in-right animation-delay-800", className)}>
      <div className="py-4">
        <SectionHeading title="Popular" />
        <div className="bg-background rounded-lg border shadow-sm">
          <div className="p-4 space-y-4">
            {popularItems.map((item, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.views} views</span>
                </div>
                <Progress value={item.progress} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
