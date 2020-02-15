import React from 'react'
import styled, { keyframes } from 'styled-components'

const Roller = styled.div`
  margin: 50px auto;
  border-radius: 50%;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--baby);
      margin: -3px 0 0 -3px;
    }
    &:nth-child(1) {
      animation-delay: -0.036s;
    }
    &:nth-child(1):after {
      top: 50px;
      left: 50px;
    }
    &:nth-child(2) {
      animation-delay: -0.072s;
    }
    &:nth-child(2):after {
      top: 54px;
      left: 45px;
    }
    &:nth-child(3) {
      animation-delay: -0.108s;
    }
    &:nth-child(3):after {
      top: 57px;
      left: 39px;
    }
    &:nth-child(4) {
      animation-delay: -0.144s;
    }
    &:nth-child(4):after {
      top: 58px;
      left: 32px;
    }
    &:nth-child(5) {
      animation-delay: -0.18s;
    }
    &:nth-child(5):after {
      top: 57px;
      left: 25px;
    }
    &:nth-child(6) {
      animation-delay: -0.216s;
    }
    &:nth-child(6):after {
      top: 54px;
      left: 19px;
    }
    &:nth-child(7) {
      animation-delay: -0.252s;
    }
    &:nth-child(7):after {
      top: 50px;
      left: 14px;
    }
    &:nth-child(8) {
      animation-delay: -0.288s;
    }
    &:nth-child(8):after {
      top: 45px;
      left: 10px;
    }
  }
`

const Spinner = () => (
  <Roller>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </Roller>
)

export default Spinner
