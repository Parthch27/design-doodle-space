
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PopularThreadsProps {
  className?: string;
}

const PopularThreads = ({ className }: PopularThreadsProps) => {
  const threads = [
    {
      id: 1,
      title: "Artificial Intelligence in Everyday Life",
      category: "Technology",
      date: "November 15, 2023"
    },
    {
      id: 2,
      title: "Sustainable Business Practices for the Future",
      category: "Business",
      date: "November 10, 2023"
    },
    {
      id: 3,
      title: "The Renaissance of Analog Experiences",
      category: "Culture",
      date: "November 5, 2023"
    }
  ];

  return (
    <div className={cn("bg-card border rounded-lg p-4", className)}>
      <h2 className="text-lg font-semibold mb-4">Popular Threads</h2>
      <div className="space-y-4">
        {threads.map((thread, index) => (
          <div key={thread.id} className="border-b pb-4 last:border-0 last:pb-0">
            <div className="flex items-center mb-2">
              <span className="text-lg font-medium mr-2">{index + 1}</span>
              <Link to={`/post/${thread.id}`} className="font-medium hover:text-primary transition-colors">
                {thread.title}
              </Link>
            </div>
            <div className="text-xs text-muted-foreground">
              r/{thread.category} • {thread.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularThreads;
