
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface AdBoxProps {
  className?: string;
}

const AdBox = ({ className }: AdBoxProps) => {
  return (
    <div className={cn("w-full animate-slide-in-right animation-delay-400", className)}>
      <div className="py-4">
        <div className="h-[200px] bg-secondary rounded-lg glass-panel group transition-all hover:shadow-md flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-xs absolute top-1 right-2 text-muted-foreground">Advertisement</span>
          <div className="text-center px-4">
            <p className="font-medium mb-2">Featured Product</p>
            <p className="text-xs text-muted-foreground mb-2">Special offer available now</p>
            <div className="flex justify-center mt-2">
              <div className="flex items-center gap-1 text-xs text-primary">
                <span>Learn more</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBox;
