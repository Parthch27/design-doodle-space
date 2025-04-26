
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chart from "@/components/Chart";
import { MessageSquare, ArrowUp, ArrowDown } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/SectionHeading";

// Mock data - in a real application this would come from an API
const postsData = [
  {
    id: 1,
    title: "The Future of Interface Design",
    content: "Exploring new innovations and methodologies that will shape the next generation of digital interfaces and interaction models. This comprehensive analysis looks at emerging trends in UI/UX design, including voice interfaces, spatial computing, and how AI is influencing the way we design digital products.\n\nThe article examines case studies from leading tech companies and innovative startups that are pushing the boundaries of what's possible in digital interface design. We'll explore how these new approaches are changing the way users interact with technology and what this means for designers and developers.",
    excerpt: "Exploring new innovations and methodologies that will shape the next generation of digital interfaces and interaction models.",
    author: {
      name: "Sarah Johnson",
      avatar: "/lovable-uploads/d5a67035-91c9-4742-931a-a04b68373c04.png",
      tag: "r/Design"
    },
    category: "Design",
    comments: 64,
    date: "September 15, 2023",
    upvotes: 249,
    isPinned: true,
    chartType: "bar",
    chartTitle: "Interface Design Evolution",
    chartDescription: "Yearly trends in interface design approaches"
  },
  {
    id: 2,
    title: "Artificial Intelligence in Everyday Life",
    content: "How AI is quietly revolutionizing the products and services we use daily. From smart home devices to the algorithms that power your social media feed, artificial intelligence is increasingly becoming an invisible but essential part of our daily routines.\n\nThis article examines the practical applications of AI technology that most people interact with without realizing, and discusses the ethical implications of this growing dependency on machine learning systems in our everyday lives.",
    excerpt: "How AI is quietly revolutionizing the products and services we use daily.",
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg",
      tag: "r/Technology"
    },
    category: "Technology",
    comments: 23,
    date: "November 15, 2023",
    upvotes: 89,
    chartType: "line",
    chartTitle: "AI Adoption Metrics",
    chartDescription: "Consumer AI technology adoption rates"
  },
  {
    id: 3,
    title: "Sustainable Business Practices for the Future",
    content: "How companies are reimagining sustainability as a core business principle. This in-depth analysis explores how leading organizations are moving beyond environmental compliance to embrace sustainability as a central value in their operations.\n\nThe article features case studies of companies that have successfully implemented regenerative business models, reducing their environmental impact while simultaneously improving profitability and stakeholder relations.",
    excerpt: "How companies are reimagining sustainability as a core business principle.",
    author: {
      name: "James Chen",
      avatar: "/placeholder.svg",
      tag: "r/Business"
    },
    category: "Business",
    comments: 23,
    date: "November 10, 2023",
    upvotes: 89,
    chartType: "bar",
    chartTitle: "Sustainability Impact",
    chartDescription: "Business metrics before and after sustainable practices implementation"
  }
];

const PostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id || "1");
  const post = postsData.find(p => p.id === postId) || postsData[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="section-container py-6">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant={post.isPinned ? "default" : "outline"} className={post.isPinned ? "bg-blue-500" : ""}>
              {post.isPinned ? "PINNED" : post.category}
            </Badge>
            <div className="text-sm text-muted-foreground">
              <span>{post.author.tag}</span>
              <span className="mx-1">•</span>
              <span>Posted by u/{post.author.name}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-3">{post.title}</h1>
          <p className="text-muted-foreground mb-6">{post.excerpt}</p>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <span className="mx-1 font-medium">{post.upvotes}</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{post.comments} Comments</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Avatar className="h-7 w-7">
                <img src={post.author.avatar} alt={post.author.name} />
              </Avatar>
              <div className="text-sm">
                <span className="font-medium">{post.author.name}</span>
                <span className="text-muted-foreground ml-1">• {post.date}</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <p>{post.content}</p>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <SectionHeading title={post.chartTitle} accent={true} />
            <p className="text-sm text-muted-foreground mb-4">{post.chartDescription}</p>
            <Chart className="h-[400px]" />
          </div>

          <Separator className="my-6" />

          <div>
            <h3 className="font-semibold mb-6">Comments ({post.comments})</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <img src="/placeholder.svg" alt="User" />
                </Avatar>
                <div className="flex-1">
                  <div className="bg-muted/40 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">TechEnthusiast</span>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm">This is a fascinating analysis. I've been noticing these trends in my own work as well. Looking forward to seeing how these design patterns evolve over the next few years.</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">Reply</Button>
                    <span>•</span>
                    <span>12 upvotes</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <img src="/placeholder.svg" alt="User" />
                </Avatar>
                <div className="flex-1">
                  <div className="bg-muted/40 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">DesignMaster</span>
                      <span className="text-xs text-muted-foreground">4 hours ago</span>
                    </div>
                    <p className="text-sm">Great article! I think the section on voice interfaces could be expanded a bit more. There are some interesting developments happening in that space right now.</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">Reply</Button>
                    <span>•</span>
                    <span>8 upvotes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostDetail;
