
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
      <div className="py-4">
        <SectionHeading title="Popular" />
        <div className="space-y-6">
          {popularPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg border shadow-sm p-5 animate-fade-in cursor-pointer hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {post.trending && (
                <div className="flex items-center text-primary text-xs font-medium mb-2 gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Trending</span>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-8 w-8 border">
                  <img src={post.avatar} alt={post.author} />
                </Avatar>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{post.author}</span> • {post.date}
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

export default PopularSection;
