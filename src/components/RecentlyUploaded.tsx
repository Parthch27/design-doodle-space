
import { Clock, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface RecentlyUploadedProps {
  className?: string;
}

const RecentlyUploaded = ({ className }: RecentlyUploadedProps) => {
  const recentItems = [
    { title: "Modern Dashboard Design", type: "Design", time: "2 hours ago" },
    { title: "Mobile App Interface", type: "UI/UX", time: "5 hours ago" },
    { title: "E-commerce Product Page", type: "Web", time: "Yesterday" },
    { title: "Brand Guidelines Document", type: "Branding", time: "2 days ago" },
  ];

  return (
    <div className={cn("w-full animate-fade-up animation-delay-800", className)}>
      <div className="section-container py-4">
        <SectionHeading title="Recently Uploaded" />
        <div className="bg-background rounded-lg border shadow-sm">
          <div className="p-4">
            <div className="space-y-4">
              {recentItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-xs px-1.5 py-0.5 bg-secondary rounded-full">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyUploaded;
