import React from 'react'
import styled from 'styled-components'

const Cover = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
`

const Description = styled.div`
  padding: 20px;
  text-align: center !important;
  font-family: 'Cinzel';
  background-color: #dddfd4;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  grid-column: 1 / -1;

  h1 {
    color: hsl(0, 100%, 18%);
    font-size: 2.25rem;
  }
`

const storeBanner = () => (
  <div className="cover">
    <Description>
      <h1>CURRENT INVENTORY</h1>
      <hr />
      <p>
        These are the pieces that I currently have available. If you don't see
        what you want here, head over to the contact page and shoot me a message
        about commissioning a custom piece and I would be happy to make
        something just for you.
      </p>
    </Description>
  </div>
)

export default storeBanner
