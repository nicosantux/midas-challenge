import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 text-base rounded font-bold transition-colors duration-300 focus-visible:focus-ring',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-700 text-gray-50 px-4 h-12 hover:bg-primary-500 focus-visible:bg-primary-500',
        secondary: 'border border-primary-700 hover:bg-primary-100 focus-visible:bg-primary-100',
        gray: 'bg-gray-200/70 text-gray-800 hover:bg-gray-200 focus-visible:bg-gray-200',
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className = '', variant, fullWidth, rounded, ...props },
  ref,
) {
  return (
    <button
      className={buttonStyles({ variant, fullWidth, rounded, className })}
      ref={ref}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
})
