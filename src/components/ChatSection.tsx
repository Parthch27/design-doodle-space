
import { SendHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface ChatSectionProps {
  className?: string;
}

const ChatSection = ({ className }: ChatSectionProps) => {
  const chatMessages = [
    { user: "User 1", message: "Hello there! How's everyone doing today?", time: "10:32 AM" },
    { user: "User 2", message: "Doing great! Just checking out this new design.", time: "10:34 AM" },
    { user: "User 3", message: "I love the clean layout and animations.", time: "10:36 AM" },
    { user: "User 1", message: "The transitions are so smooth!", time: "10:38 AM" },
  ];

  return (
    <div className={cn("w-full animate-fade-up animation-delay-200", className)}>
      <div className="section-container py-4">
        <SectionHeading title="Chat" />
        <div className="bg-background rounded-lg border shadow-sm">
          <div className="p-4 max-h-[300px] overflow-y-auto">
            {chatMessages.map((chat, index) => (
              <div key={index} className="mb-4 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{chat.user}</p>
                      <span className="text-xs text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className="text-sm mt-1">{chat.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <Input 
              placeholder="Type your message..." 
              className="h-9"
            />
            <Button size="sm" className="h-9 px-3">
              <SendHorizontal className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
