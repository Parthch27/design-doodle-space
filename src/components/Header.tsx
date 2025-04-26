
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="w-full border-b py-4 animate-fade-in">
      <div className="section-container flex items-center justify-between">
        <div className="font-semibold text-2xl text-primary">Arthive</div>
        
        <div className="hidden md:flex relative max-w-md w-full">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search for articles..." 
              className="pl-10 w-full bg-muted/40"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Register
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
