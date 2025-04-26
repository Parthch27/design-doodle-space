
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    tag: string;
  };
  category: string;
  comments: number;
  date: string;
  upvotes: number;
  isPinned?: boolean;
}

interface PostListProps {
  posts: PostProps[];
  className?: string;
}

export const PostItem = ({ post }: { post: PostProps }) => {
  return (
    <div className="bg-card border rounded-lg overflow-hidden mb-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col p-4">
        <div className="flex items-center space-x-2 mb-1">
          {post.isPinned && (
            <Badge variant="default" className="bg-blue-500 text-white text-xs">PINNED</Badge>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <Avatar className="h-5 w-5 mr-1">
              <img src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
            </Avatar>
            <span>{post.author.tag}</span>
            <span className="mx-1">•</span>
            <span>Posted by u/{post.author.name}</span>
          </div>
        </div>

        <Link to={`/post/${post.id}`}>
          <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <Badge variant="outline">{post.category}</Badge>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m6 9 6 6 6-6"/></svg>
              <span>{post.upvotes}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m18 15-6-6-6 6"/></svg>
            </div>
            
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{post.comments} Comments</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-2 p-2 border-t flex justify-end">
        <Link to={`/post/${post.id}`} className="text-primary text-sm font-medium flex items-center">
          Read Full Thread
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  );
};

const PostList = ({ posts, className }: PostListProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
