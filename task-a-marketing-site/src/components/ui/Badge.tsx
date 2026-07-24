import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-indigo-100 text-indigo-700",
        variant === "success" && "bg-green-100 text-green-700",
      )}
    >
      {children}
    </span>
  );
}
