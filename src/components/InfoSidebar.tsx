
import { FileText, Globe, User } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface InfoSidebarProps {
  className?: string;
}

const InfoSidebar = ({ className }: InfoSidebarProps) => {
  const infoItems = [
    { 
      title: "Source", 
      value: "Wireframe Analytics", 
      icon: FileText 
    },
    { 
      title: "Published By", 
      value: "Wireframe Media", 
      icon: User 
    },
    { 
      title: "Region", 
      value: "North America", 
      icon: Globe 
    },
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
                    <item.icon className="h-3 w-3" />
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
