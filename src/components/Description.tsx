
import { LayoutList } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface DescriptionProps {
  className?: string;
}

const Description = ({ className }: DescriptionProps) => {
  return (
    <div className={cn("w-full animate-fade-up animation-delay-400", className)}>
      <div className="section-container py-4">
        <SectionHeading title="Description" />
        <div className="bg-background rounded-lg border p-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <LayoutList className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Wireframe Layout Example</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a minimalist, Apple-inspired wireframe layout that demonstrates clean design principles and perfect spacing. 
                The layout includes various sections like advertisement banners, chat interface, information sidebar, and content areas.
                Each element is designed with attention to detail, ensuring a premium and polished user experience.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary text-xs rounded-full">Minimalist</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded-full">Modern</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded-full">Clean Design</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded-full">Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
