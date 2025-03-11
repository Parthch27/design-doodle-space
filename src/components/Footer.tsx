
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("w-full border-t mt-10 animate-fade-in", className)}>
      <div className="section-container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2023 Wireframe. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">Designed with precision and attention to detail.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
