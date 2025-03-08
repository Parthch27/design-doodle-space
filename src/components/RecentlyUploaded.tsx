
import { Clock, MessageSquare, Share2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface RecentlyUploadedProps {
  className?: string;
}

const RecentlyUploaded = ({ className }: RecentlyUploadedProps) => {
  const recentPosts = [
    { 
      author: "Sarah Johnson", 
      date: "September 15, 2023",
      title: "The Future of Interface Design", 
      excerpt: "Exploring how minimalism and functionality are shaping the next generation of digital interfaces.",
      category: "Design",
      comments: 5,
      avatar: "/lovable-uploads/d5a67035-91c9-4742-931a-a04b68373c04.png"
    },
    { 
      author: "Alex Rivera", 
      date: "September 10, 2023",
      title: "Responsive Layouts for Modern Web", 
      excerpt: "How to create flexible designs that work across all device sizes while maintaining visual harmony.",
      category: "Development",
      comments: 8,
      avatar: "/placeholder.svg"
    },
    { 
      author: "Maria Chen", 
      date: "September 5, 2023",
      title: "Color Theory in Digital Products", 
      excerpt: "Understanding how color choices impact user experience and brand perception in digital interfaces.",
      category: "Design",
      comments: 12,
      avatar: "/placeholder.svg"
    },
  ];

  return (
    <div className={cn("w-full animate-fade-up animation-delay-800", className)}>
      <div className="section-container py-3">
        <SectionHeading title="Recently Uploaded" />
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg border shadow-sm p-3 animate-fade-in cursor-pointer hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Avatar className="h-6 w-6 border">
                  <img src={post.avatar} alt={post.author} />
                </Avatar>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{post.author}</span> • {post.date}
                </div>
              </div>
              
              <h3 className="text-sm font-semibold mb-1">{post.title}</h3>
              <p className="text-muted-foreground text-xs mb-2 line-clamp-1">{post.excerpt}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">{post.category}</span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-6 px-1.5 text-xs gap-1">
                    <Share2 className="h-3 w-3" />
                    <span>Share</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 px-1.5 text-xs gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>{post.comments}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyUploaded;
