import { cn } from "../../lib/utils";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  gradient?: boolean;
}

export const Separator = ({
  orientation = "horizontal",
  className,
  gradient = false,
}: SeparatorProps) => {
  return (
    <div
      role="separator"
      className={cn(
        "shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        gradient && orientation === "vertical"
          ? "bg-linear-to-b from-transparent via-stroke-primary/50 to-transparent border-0"
          : gradient && orientation === "horizontal"
          ? "bg-linear-to-r from-transparent via-stroke-primary/50 to-transparent border-0"
          : "bg-stroke-primary/50",
        className
      )}
    />
  );
};
