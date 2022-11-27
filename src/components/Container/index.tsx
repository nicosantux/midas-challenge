import type { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  )
}
