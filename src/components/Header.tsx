
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b animate-fade-in">
      <div className="section-container h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="font-semibold text-xl">Wireframe</div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Register
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
