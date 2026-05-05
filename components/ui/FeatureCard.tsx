import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "highlight" | "dark";
  badge?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = "default",
  badge,
  image,
  imageAlt,
  footer,
}: FeatureCardProps) {
  const variants = {
    default: "bg-white border-outline-variant hover:border-secondary",
    highlight: "bg-surface-container border-outline-variant",
    dark: "bg-primary text-on-primary border-primary-container",
  };

  return (
    <div
      className={cn(
        "border p-10 rounded-xl transition-colors group",
        variants[variant],
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div
            className={cn(
              "text-4xl mb-4",
              variant === "dark" ? "text-secondary-fixed" : "text-secondary"
            )}
          >
            {icon}
          </div>
          <h3 className="font-headline text-2xl mb-2">{title}</h3>
          <p
            className={cn(
              variant === "dark"
                ? "text-on-primary-container"
                : "text-on-surface-variant"
            )}
          >
            {description}
          </p>
        </div>
        {badge && <div className="hidden sm:block">{badge}</div>}
      </div>

      {image && (
        <img
          src={image}
          alt={imageAlt || title}
          className="rounded-lg w-full h-48 object-cover border border-outline-variant mt-6"
        />
      )}

      {footer && <div className="mt-6">{footer}</div>}
    </div>
  );
}
