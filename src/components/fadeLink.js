import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

const FadeLink = ({ to, children, className, activeClassName }) => (
  <TransitionLink className={className} activeClassName={activeClassName} to={to} exit={{ length: 1 }}>
    {children}
  </TransitionLink>
)

export default FadeLink
