
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  accent?: boolean;
}

const SectionHeading = ({ title, className, accent = false }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      <div className={cn("mt-1 h-1 w-10 rounded-full", accent ? "bg-[#8884d8]" : "bg-primary")} />
    </div>
  );
};

export default SectionHeading;
