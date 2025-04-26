
import { Clock, Hash, MessageSquare, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navItems = [
    { icon: Hash, label: "All", active: true },
    { icon: TrendingUp, label: "Popular" },
    { icon: Clock, label: "Recent" },
    { icon: MessageSquare, label: "Saved" }
  ];
  
  const topicItems = [
    { label: "Technology", icon: "lightning" },
    { label: "Design", icon: "star" },
    { label: "Business", icon: "chart" },
    { label: "Culture", icon: "hash" }
  ];

  return (
    <aside className={cn("hidden md:block w-64 pr-6", className)}>
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-sm">Main</h3>
            <button className="text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-sm",
                  item.active ? "bg-primary text-primary-foreground" : ""
                )}
              >
                {index === 0 ? (
                  <Hash className="h-4 w-4 mr-2" />
                ) : (
                  <item.icon className="h-4 w-4 mr-2" />
                )}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-sm">Topics</h3>
            <button className="text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>
          <div className="space-y-1">
            {topicItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-sm"
              >
                {index === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7"/></svg>
                ) : index === 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ) : index === 2 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                ) : (
                  <Hash className="h-4 w-4 mr-2" />
                )}
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <Button variant="outline" className="w-full justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add Topic
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
