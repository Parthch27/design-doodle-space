
import { Info } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface InfoSidebarProps {
  className?: string;
}

const InfoSidebar = ({ className }: InfoSidebarProps) => {
  const infoItems = [
    { title: "Active Users", value: "1,245" },
    { title: "New Topics", value: "36" },
    { title: "Notifications", value: "8" },
    { title: "Updates", value: "3" },
  ];

  return (
    <div className={cn("w-full animate-slide-in-right", className)}>
      <div className="py-4">
        <SectionHeading title="Info" />
        <div className="bg-background rounded-lg border shadow-sm">
          <div className="p-4 space-y-4">
            {infoItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Info className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{item.title}</span>
                </div>
                <span className="font-medium text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSidebar;
