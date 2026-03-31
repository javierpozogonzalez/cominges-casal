import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-800 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-base md:text-lg max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
