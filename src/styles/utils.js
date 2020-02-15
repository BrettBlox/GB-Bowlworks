import { css } from 'styled-components'

const utils = css`
  /* VISUALLY HIDDEN UTILITY
This does exactly what it says on the tin. It hides the element visually, but the content is still 
accessible to assistive technology like screen readers.  */
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  /* FLOW UTILITY
This is a great way of adding space between sibling elements */
  .flow {
    --flow-space: var(--metric-rhythm);
  }

  .flow > * + * {
    margin-top: 1em;
    margin-top: var(--flow-space);
  }
`

export default utils
