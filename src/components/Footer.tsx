
import { Github, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("w-full border-t mt-10 animate-fade-in", className)}>
      <div className="section-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Wireframe</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              A beautiful, minimalist wireframe layout designed with attention to detail and fluid animations.
              Perfect for showcasing your content in an elegant way.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2023 Wireframe. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">Designed with precision and attention to detail.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
