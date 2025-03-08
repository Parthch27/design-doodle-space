
import { ExternalLink, Grid2X2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface TaboolaSectionProps {
  className?: string;
}

const TaboolaSection = ({ className }: TaboolaSectionProps) => {
  const adItems = [
    { title: "10 Design Tips You Should Know", image: "bg-primary/10" },
    { title: "Why This Layout Works So Well", image: "bg-primary/15" },
    { title: "The Future of Web Design", image: "bg-primary/20" },
  ];

  return (
    <div className={cn("w-full animate-fade-up animation-delay-600", className)}>
      <div className="section-container py-4">
        <SectionHeading title="Taboola" />
        <div className="bg-background rounded-lg border shadow-sm p-4">
          <div className="grid grid-cols-3 gap-4">
            {adItems.map((item, index) => (
              <div
                key={index}
                className="col-span-1 group glass-panel rounded-md border border-border/50 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-24 ${item.image} flex items-center justify-center relative`}>
                  <Grid2X2 className="h-8 w-8 text-primary/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium line-clamp-2">{item.title}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                    <span>Sponsored</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaboolaSection;
