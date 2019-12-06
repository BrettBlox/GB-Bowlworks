import React from 'react'
import '../styles/spinner.css'

const spinner = ({ stylez }) => (
  <div className="lds-roller" style={stylez}>
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
