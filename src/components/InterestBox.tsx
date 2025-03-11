
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface InterestBoxProps {
  className?: string;
}

const InterestBox = ({ className }: InterestBoxProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const infographics = [
    {
      title: "Tech Trends",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
      description: "Latest technology trends in 2023"
    },
    {
      title: "Digital Work",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200",
      description: "Remote work statistics and insights"
    },
    {
      title: "Programming",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=200",
      description: "Most popular programming languages"
    },
    {
      title: "Tech Hardware",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=200",
      description: "New hardware developments"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infographics.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [infographics.length]);

  return (
    <div className={cn("w-full animate-slide-in-right animation-delay-600", className)}>
      <div className="py-4">
        <SectionHeading title="Infographics" />
        <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
          <div className="relative h-[200px] w-full">
            {infographics.map((infographic, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={infographic.imageSrc}
                  alt={infographic.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                  <h4 className="text-white text-xs font-medium">{infographic.title}</h4>
                  <p className="text-white/80 text-xs mt-0.5">{infographic.description}</p>
                </div>
              </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1 z-10">
              {infographics.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestBox;
