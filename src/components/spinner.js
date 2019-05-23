import React from 'react'
import '../styles/spinner.css'

const spinner = (props) => (
  <div className="lds-roller" style={props.stylez}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)

export default spinner
