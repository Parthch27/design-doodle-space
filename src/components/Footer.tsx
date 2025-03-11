
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("w-full border-t mt-10 animate-fade-in", className)}>
      <div className="section-container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h4 className="font-medium text-sm mb-2">Source:</h4>
            <p className="text-xs text-muted-foreground">Wireframe Analytics</p>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium text-sm mb-2">Published By:</h4>
            <p className="text-xs text-muted-foreground">Wireframe Media Group</p>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium text-sm mb-2">Region:</h4>
            <p className="text-xs text-muted-foreground">North America</p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2023 Wireframe. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">Designed with precision and attention to detail.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
