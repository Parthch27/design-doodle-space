
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import PostList from "@/components/PostList";
import FilterCategories from "@/components/FilterCategories";
import PopularThreads from "@/components/PopularThreads";
import SubscribeBox from "@/components/SubscribeBox";

const Index = () => {
  // Mock data - in a real application this would come from an API
  const posts = [
    {
      id: 1,
      title: "The Future of Interface Design",
      excerpt: "Exploring new innovations and methodologies that will shape the next generation of digital interfaces and interaction models.",
      author: {
        name: "Sarah Johnson",
        avatar: "/lovable-uploads/a4d243ee-ac02-49f4-8892-10af603218a2.png",
        tag: "r/Design"
      },
      category: "Design",
      comments: 64,
      date: "September 15, 2023",
      upvotes: 249,
      isPinned: true
    },
    {
      id: 2,
      title: "Artificial Intelligence in Everyday Life",
      excerpt: "How AI is quietly revolutionizing the products and services we use daily.",
      author: {
        name: "Alex Morgan",
        avatar: "/placeholder.svg",
        tag: "r/Technology"
      },
      category: "Technology",
      comments: 23,
      date: "November 15, 2023",
      upvotes: 89
    },
    {
      id: 3,
      title: "Sustainable Business Practices for the Future",
      excerpt: "How companies are reimagining sustainability as a core business principle.",
      author: {
        name: "James Chen",
        avatar: "/placeholder.svg",
        tag: "r/Business"
      },
      category: "Business",
      comments: 23,
      date: "November 10, 2023",
      upvotes: 89
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Sidebar className="flex-shrink-0" />
            
            <div className="flex-1">
              <FilterCategories />
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
                <PostList posts={posts} />
              </div>
            </div>
            
            <div className="w-full md:w-80 space-y-6">
              <SubscribeBox />
              <PopularThreads />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
