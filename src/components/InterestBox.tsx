
import { Heart, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InterestBoxProps {
  className?: string;
}

const InterestBox = ({ className }: InterestBoxProps) => {
  const interestItems = [
    { title: "Design", count: 128 },
    { title: "Technology", count: 85 },
    { title: "Development", count: 64 },
    { title: "Interface", count: 42 },
  ];

  return (
    <div className={cn("w-full animate-slide-in-right animation-delay-600", className)}>
      <div className="py-4">
        <SectionHeading title="Interest Me" />
        <div className="bg-background rounded-lg border shadow-sm">
          <div className="p-4 space-y-3">
            {interestItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{item.title}</span>
                </div>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">{item.count}</span>
              </div>
            ))}
            <Button size="sm" variant="outline" className="w-full mt-2">
              <Heart className="h-3 w-3 mr-2" />
              <span className="text-xs">Follow Interests</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestBox;
