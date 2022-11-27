import { type InputHTMLAttributes, useState, forwardRef } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import { Button } from '..'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  helperText?: string
  label: string
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { errorMessage, helperText, id, label, type, ...props },
  ref,
) {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleShowPassword = () => type === 'password' && setShowPassword((state) => !state)

  return (
    <div className="flex flex-col gap-2" role="group">
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="relative ">
        <input
          className={`focus-visible:ring-primary-600 w-full rounded-md bg-gray-50 p-2 font-medium ring-1 ring-gray-600 focus-visible:outline-none focus-visible:ring-2 dark:bg-gray-800 ${
            !!errorMessage
              ? 'ring-error-600 focus-visible:ring-error-600 dark:ring-error-400 ring-2'
              : ''
          }`}
          id={id}
          ref={ref}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          {...props}
        />
        {type === 'password' && (
          <Button
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute bottom-[20px] right-2 h-7 w-7 translate-y-1/2 p-0"
            onClick={toggleShowPassword}
            variant="gray"
            // colorScheme="gray"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </Button>
        )}
      </div>
      {!!helperText && !errorMessage && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{helperText}</p>
      )}
      {!!errorMessage && (
        <span className="text-error-600 dark:text-error-400 text-sm font-medium" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
})
