import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function Card({ children, className, featured }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-6 sm:p-8",
        featured
          ? "border-indigo-200 ring-2 ring-indigo-500 shadow-lg shadow-indigo-100"
          : "border-zinc-200 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
