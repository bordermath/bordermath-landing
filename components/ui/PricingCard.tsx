import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Check, X } from "@deemlol/next-icons";

interface PricingFeature {
  text: string;
  included: boolean;
  icon?: React.ReactNode;
}

interface PricingCardProps {
  label?: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  variant?: "default" | "highlight";
  badge?: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export function PricingCard({
  label,
  name,
  price,
  period = "/ month",
  description,
  features,
  variant = "default",
  badge,
  ctaText,
  onCtaClick,
}: PricingCardProps) {
  const isHighlight = variant === "highlight";

  return (
    <div
      className={cn(
        "rounded-xl p-10 flex flex-col h-full relative overflow-hidden",
        isHighlight
          ? "bg-primary text-on-primary border border-primary-container"
          : "bg-white border border-outline-variant"
      )}
    >
      {badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-b-lg text-[10px] font-bold tracking-wider uppercase z-10">
          {badge}
        </div>
      )}

      <div className="mb-8 mt-2">
        {label && (
          <div className={cn("text-xs font-semibold tracking-widest uppercase mb-2", isHighlight ? "text-slate-400" : "text-slate-500")}>
            {label}
          </div>
        )}
        <h3 className="font-headline text-2xl mb-2">{name}</h3>
        <div
          className={cn(
            "text-4xl font-bold mb-4",
            isHighlight ? "text-white" : "text-on-surface"
          )}
        >
          {price}{" "}
          <span
            className={cn(
              "text-sm font-normal",
              isHighlight ? "text-slate-400" : "text-on-surface-variant"
            )}
          >
            {period}
          </span>
        </div>
        <p
          className={cn(
            isHighlight ? "text-slate-400" : "text-on-surface-variant"
          )}
        >
          {description}
        </p>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center gap-3 text-sm",
              !feature.included && "opacity-40"
            )}
          >
            {feature.included ? (
              <span
                className={cn(
                  isHighlight ? "text-secondary-fixed" : "text-secondary"
                )}
              >
                {feature.icon || <Check className="w-4 h-4" />}
              </span>
            ) : (
              <X className="w-4 h-4" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      <Button
        variant={isHighlight ? "outline" : "outline"}
        className={cn("w-full py-4", isHighlight && "bg-white text-primary border-none hover:bg-slate-100")}
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </div>
  );
}
