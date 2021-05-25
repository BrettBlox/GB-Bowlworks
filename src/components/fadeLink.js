import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

const FadeLink = ({
  to,
  children,
  id,
  className,
  activeClassName,
  partiallyActive,
}) => (
  <TransitionLink
    id={id}
    className={className}
    activeClassName={activeClassName}
    partiallyActive={partiallyActive}
    to={to}
    exit={{
      length: 1,
    }}
  >
    {children}
  </TransitionLink>
)

export default FadeLink
