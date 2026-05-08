import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 rounded-lg";

  const variants = {
    primary: "bg-primary text-on-primary hover:opacity-90 shadow-lg",
    secondary: "bg-secondary text-on-secondary hover:opacity-90",
    outline:
      "border border-outline-variant bg-white text-primary hover:bg-slate-50",
    ghost: "text-slate-500 hover:text-slate-900 transition-colors",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
