
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
      <div className="section-container py-4">
        <SectionHeading title="Recently Uploaded" />
        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg border shadow-sm p-5 animate-fade-in cursor-pointer hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-8 w-8 border">
                  <img src={post.avatar} alt={post.author} />
                </Avatar>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{post.author}</span> • Posted by {post.author} • {post.date}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs px-3 py-1 bg-secondary rounded-full">{post.category}</span>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments} Comments</span>
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
