import * as React from 'react'

import { cn } from '@/lib/utils'
import { FieldError } from 'react-hook-form'
import { cva } from 'class-variance-authority'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      error: {
        true: 'text-red-500 border-red-500 focus-visible:ring-red-500 focus-visible:border-red-600',
        false: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        inputVariants({
          error: !!error,
        }),
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
