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
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        gradient && orientation === "vertical"
          ? "bg-gradient-to-b from-transparent via-stroke-primary/50 to-transparent border-0"
          : gradient && orientation === "horizontal"
          ? "bg-gradient-to-r from-transparent via-stroke-primary/50 to-transparent border-0"
          : "bg-stroke-primary/50",
        className
      )}
    />
  );
};
