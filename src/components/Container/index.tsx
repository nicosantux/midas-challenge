import type { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`container grid h-full place-items-center ${className}`} {...props}>
      {children}
    </div>
  )
}
