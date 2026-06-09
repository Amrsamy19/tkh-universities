import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'desktop' | 'tablet' | 'mobile';
  icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'desktop',
      icon = true,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base classes for the button
      const baseClasses = cn(
      'inline-flex items-center justify-between rounded-[9999px] transition-all duration-300 w-fit',
      'font-bold',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-200 disabled:opacity-50 disabled:cursor-not-allowed',
      {
        // Sizes using the custom spacing variables from the design system, with responsive breakpoints
        'px-m py-xs text-button-2 gap-x-4 xl:px-l xl:py-s 2xl:px-xl 2xl:py-m 2xl:text-button-1 2xl:gap-x-6': size === 'desktop',
        'px-l py-s text-button-2 gap-x-4': size === 'tablet',
        'px-m py-xs text-button-2 gap-x-3': size === 'mobile',
      }
    );

    // Variant classes
    const variantClasses = cn({
      // Primary
      'bg-brand-orange-200 text-white hover:bg-[#D14120]':
        variant === 'primary' && !disabled,
      'bg-neutral-500 text-white': variant === 'primary' && disabled,

      // Secondary
      'bg-white text-brand-orange-200 hover:bg-neutral-50 shadow-sm':
        variant === 'secondary' && !disabled,
      'bg-neutral-200 text-neutral-500': variant === 'secondary' && disabled,

      // Tertiary
      'bg-transparent text-white hover:text-brand-orange-100':
        variant === 'tertiary' && !disabled,
      'text-neutral-500': variant === 'tertiary' && disabled,

      // Outline
      'bg-transparent border border-[#FFFFFF] text-[#FFFFFF] hover:bg-white/10':
        variant === 'outline' && !disabled,
      'bg-transparent border border-neutral-500 text-neutral-500':
        variant === 'outline' && disabled,
    });

    // Icon classes (using arbitrary pixel values to ensure a perfect circle regardless of custom spacing scales)
    const iconContainerClasses = cn(
      'flex items-center justify-center rounded-[9999px] shrink-0 transition-transform duration-300 group-hover:scale-110',
      {
        'w-[32px] h-[32px] xl:w-[40px] xl:h-[40px] 2xl:w-[48px] 2xl:h-[48px]': size === 'desktop',
        'w-[40px] h-[40px]': size === 'tablet',
        'w-[32px] h-[32px]': size === 'mobile',

        // Primary & Outline Icon
        'bg-white text-brand-orange-200': (variant === 'primary' || variant === 'outline') && !disabled,
        'bg-neutral-300 text-neutral-500': (variant === 'primary' || variant === 'outline') && disabled,

        // Secondary Icon
        'bg-brand-orange-200 text-white': variant === 'secondary' && !disabled,
        'bg-neutral-400 text-white': variant === 'secondary' && disabled,

        // Tertiary Icon
        'bg-transparent border border-brand-orange-200 text-brand-orange-200':
          variant === 'tertiary' && !disabled,
        'border border-neutral-500 text-neutral-500':
          variant === 'tertiary' && disabled,
      }
    );

    const IconComponent = variant === 'tertiary' ? ArrowRight : ArrowUpRight;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseClasses, variantClasses, 'group', className)}
        {...props}
      >
        <span className="whitespace-nowrap pt-1">{children}</span>
        {icon && (
          <div className={iconContainerClasses}>
            <IconComponent
              className={cn({
                'w-[16px] h-[16px] xl:w-[20px] xl:h-[20px] 2xl:w-[24px] 2xl:h-[24px]': size === 'desktop',
                'w-[20px] h-[20px]': size === 'tablet',
                'w-[16px] h-[16px]': size === 'mobile',
              })}
              strokeWidth={2.5}
            />
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
