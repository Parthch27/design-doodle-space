
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      <div className="mt-1 h-1 w-10 bg-primary rounded-full" />
    </div>
  );
};

export default SectionHeading;
