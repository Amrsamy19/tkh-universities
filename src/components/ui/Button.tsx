import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "desktop" | "tablet" | "mobile";
  icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "desktop",
      icon = true,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    // Base classes for the button
    const baseClasses = cn(
      "flex items-center justify-center rounded-[9999px] transition-all duration-300",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      {
        // Sizes for buttons WITH icons
        "gap-s py-2 ps-6 pe-2":
          (size === "desktop" || size === "tablet") && icon,
        "px-m py-xs text-button-2 gap-x-3": size === "mobile" && icon,

        // Sizes for buttons WITHOUT icons (symmetric padding to match height)
        "px-xl py-m text-button-2": size === "desktop" && !icon,
        "px-l py-s text-button-2": size === "tablet" && !icon,
        "px-m py-s text-button-2": size === "mobile" && !icon,
      },
    );

    // Variant classes
    const variantClasses = cn({
      // Primary
      "bg-brand-orange-200 text-white hover:bg-[#D14120]":
        variant === "primary" && !disabled,
      "bg-neutral-500 text-white": variant === "primary" && disabled,

      // Secondary
      "bg-white text-brand-orange-200 hover:bg-neutral-50 shadow-sm":
        variant === "secondary" && !disabled,
      "bg-neutral-200 text-neutral-500": variant === "secondary" && disabled,

      // Tertiary
      "bg-transparent text-white hover:text-brand-orange-100":
        variant === "tertiary" && !disabled,
      "text-neutral-500": variant === "tertiary" && disabled,

      // Outline
      "bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-white/10":
        variant === "outline" && !disabled,
      "bg-transparent border-2 border-neutral-500 text-neutral-500":
        variant === "outline" && disabled,
    });

    // Icon classes (using arbitrary pixel values to ensure a perfect circle regardless of custom spacing scales)
    const iconContainerClasses = cn(
      "flex items-center justify-center rounded-[9999px] shrink-0 transition-transform duration-300",
      {
        "w-[32px] h-[32px]": size === "desktop" || size === "tablet",
        "w-[24px] h-[24px]": size === "mobile",

        // Primary & Outline Icon
        "bg-white text-brand-orange-200":
          (variant === "primary" || variant === "outline") && !disabled,
        "bg-neutral-300 text-neutral-500":
          (variant === "primary" || variant === "outline") && disabled,

        // Secondary Icon
        "bg-brand-orange-200 text-white": variant === "secondary" && !disabled,
        "bg-neutral-400 text-white": variant === "secondary" && disabled,

        // Tertiary Icon
        "bg-transparent border border-brand-orange-200 text-brand-orange-200":
          variant === "tertiary" && !disabled,
        "border border-neutral-500 text-neutral-500":
          variant === "tertiary" && disabled,
      },
    );

    const IconComponent = variant === "tertiary" ? ArrowRight : ArrowUpRight;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseClasses, variantClasses, "group", className)}
        {...props}
      >
        <span className="whitespace-nowrap">{children}</span>
        {icon && (
          <div className={iconContainerClasses}>
            <IconComponent
              className={cn({
                "w-6 h-6": size === "desktop" || size === "tablet",
                "w-4 h-4": size === "mobile",
              })}
              strokeWidth={2.5}
            />
          </div>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
