
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
}

const AdBanner = ({ className }: AdBannerProps) => {
  return (
    <div className={cn("w-full animate-fade-up", className)}>
      <div className="section-container py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-3 h-24 sm:h-32 bg-secondary rounded-lg flex items-center justify-center glass-panel group transition-all hover:shadow-md overflow-hidden">
            <span className="text-xs absolute top-1 right-2 text-muted-foreground">Advertisement</span>
            <div className="flex flex-col items-center gap-2">
              <p className="font-medium text-center">Premium Banner Advertisement</p>
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="hidden md:flex col-span-1 h-32 bg-secondary rounded-lg items-center justify-center glass-panel group transition-all hover:shadow-md overflow-hidden">
            <span className="text-xs absolute top-1 right-2 text-muted-foreground">Ad</span>
            <div className="flex flex-col items-center gap-2">
              <p className="font-medium text-sm text-center">Sidebar Ad</p>
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
