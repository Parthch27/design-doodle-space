
import { BarChart4 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";
import Chart from "./Chart";

interface DescriptionProps {
  className?: string;
}

const Description = ({ className }: DescriptionProps) => {
  return (
    <div className={cn("w-full animate-fade-up animation-delay-400", className)}>
      <div className="section-container py-4">
        <SectionHeading title="Traffic Analytics" />
        <div className="bg-background rounded-lg border p-4 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <BarChart4 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Website Performance Dashboard</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This chart displays the monthly website traffic and revenue trends over the first half of the year. 
                  The purple bars represent the number of visitors each month, while the green bars show the corresponding revenue in dollars.
                  Note the significant revenue spike in March despite lower visitor numbers, indicating higher conversion rates during that period.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-secondary text-xs rounded-full">Analytics</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-full">Performance</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-full">Revenue</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-full">Traffic</span>
                </div>
              </div>
            </div>
            
            {/* Add the chart component */}
            <Chart className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
