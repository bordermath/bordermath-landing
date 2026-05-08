import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface AlertRowProps {
  label: string;
  status: "active" | "expiring" | "expired" | "default";
  statusText: string;
  className?: string;
  muted?: boolean;
}

export function AlertRow({
  label,
  status,
  statusText,
  className,
  muted = false,
}: AlertRowProps) {
  const statusVariants = {
    active: "success",
    expiring: "error",
    expired: "error",
    default: "default",
  } as const;

  return (
    <div
      className={cn(
        "bg-white border border-outline-variant p-3 rounded flex items-center justify-between",
        muted && "opacity-60",
        className
      )}
    >
      <span className="text-sm font-medium">{label}</span>
      <Badge variant={statusVariants[status]}>{statusText}</Badge>
    </div>
  );
}
