import React from 'react'
import posed from 'react-pose'
import { TransitionState } from 'gatsby-plugin-transition-link'

// Your pose
const Fade = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

// In a component that wraps your page contents
const FadeWrapper = ({ children }) => (
  // We're using the TransitionState component here to provide the current transition status to our pose
  <TransitionState>
    {({ transitionStatus }) => (
      <Fade
        pose={
          ['entering', 'entered'].includes(transitionStatus)
            ? 'visible'
            : 'hidden'
        }
      >
        {children}
      </Fade>
    )}
  </TransitionState>
)

export default FadeWrapper
