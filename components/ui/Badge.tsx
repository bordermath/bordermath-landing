import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "error" | "secondary";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  className,
  icon,
}: BadgeProps) {
  const variants = {
    default: "bg-surface-container text-on-surface",
    success: "bg-secondary/20 text-secondary",
    error: "bg-error-container text-on-error-container",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-label-caps",
        variants[variant],
        className
      )}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </span>
  );
}
