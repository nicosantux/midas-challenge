import type { FC, ButtonHTMLAttributes } from 'react'

import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 text-base rounded font-bold transition-colors duration-300 focus-visible:focus-ring',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-700 text-gray-50 px-4 h-12 hover:bg-primary-500 focus-visible:bg-primary-500 disabled:bg-primary-700/50',
        secondary:
          'border border-primary-700 hover:bg-primary-100 px-4 h-12 text-primary-700 focus-visible:bg-primary-100 disabled:border-primary-700/50 disabled:text-primary-700/50',
        gray: 'bg-gray-200/70 text-gray-800 hover:bg-gray-200 focus-visible:bg-gray-200',
        error:
          'bg-error-700 text-gray-50 px-4 h-12 hover:bg-error-500 focus-visible:bg-error-500 disabled:bg-error-700/50',
      },
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  fullWidth,
  rounded,
  ...props
}) => {
  return (
    <button
      className={buttonStyles({ variant, fullWidth, rounded, className })}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
