import type { FC } from 'react'

import { Link as ReactRouterLink, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {}

export const Link: FC<Props> = ({ ...props }) => {
  return <ReactRouterLink {...props} />
}
