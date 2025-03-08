
import { MessageSquare, Share2, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PopularSectionProps {
  className?: string;
}

const PopularSection = ({ className }: PopularSectionProps) => {
  const popularPosts = [
    { 
      author: "James Wilson", 
      date: "August 28, 2023",
      title: "UX Principles Every Designer Should Know", 
      excerpt: "The fundamental principles that guide effective user experience design in modern applications.",
      category: "UX Design",
      comments: 24,
      trending: true,
      avatar: "/placeholder.svg"
    },
    { 
      author: "Priya Sharma", 
      date: "August 22, 2023",
      title: "Introduction to Design Systems", 
      excerpt: "How to build and maintain consistent design systems that scale across products.",
      category: "Systems",
      comments: 17,
      trending: true,
      avatar: "/placeholder.svg"
    },
    { 
      author: "David Kim", 
      date: "August 15, 2023",
      title: "Typography in Digital Interfaces", 
      excerpt: "Choosing and pairing fonts for optimal readability and visual hierarchy in interfaces.",
      category: "Typography",
      comments: 9,
      trending: false,
      avatar: "/placeholder.svg"
    },
  ];

  return (
    <div className={cn("w-full animate-slide-in-right animation-delay-800", className)}>
      <div className="py-3">
        <SectionHeading title="Popular" />
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg border shadow-sm p-3 animate-fade-in cursor-pointer hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {post.trending && (
                <div className="flex items-center text-primary text-xs font-medium mb-1 gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>Trending</span>
                </div>
              )}
              
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

export default PopularSection;
