import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

// import '../styles/success.css'

const SuccessWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  font-family: 'Cinzel', serif;
  text-align: center;
`

const Success = styled.div`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  grid-column: 1 / -1;
  background-color: #dddfd4;
  width: 40vw;
  height: auto;
  margin: 0 auto;
  border-radius: 5px;
  padding: 20px 50px 50px;

  h1 {
    font-size: 2.5rem;

    @media only screen and (max-width: 650px) {
      font-size: 2rem;
    }
  }

  h2 {
    text-align: center;
  }

  @media only screen and (max-width: 650px) {
    width: 70vw;
  }

  @media only screen and (max-width: 500px) {
    width: 80vw;
  }
`

const SuccessLink = styled.div`
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  @media only screen and (max-width: 650px) {
    font-size: 1.25rem;
  }
`

const BackHome = styled(Link)`
  margin: 10px 10px;
  font: 700 1.7rem 'Cinzel', sans-serif;
  background-color: hsl(0, 100%, 18%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #d7a150, #d7a150 50%, hsl(0, 100%, 18%) 50%);
  background-size: 200% 100%;
  background-position: 100%;
  text-decoration: none;
  text-decoration-color: hsl(0, 100%, 18%);
  transition: all 0.3s;

  &:hover {
    background-position: 0%;
  }
`

const SuccessPage = () => (
  <Layout title="Success">
    <SuccessWrapper>
      <Success>
        <h1>Success!</h1>
        <hr />
        <h2>
          Thank you for your message!
          <br />
          <br /> I will get back to you as soon as possible.
        </h2>
        <br />
        <SuccessLink>
          <BackHome to="/" type="button">
            BACK TO HOME PAGE &rarr;
          </BackHome>
        </SuccessLink>
      </Success>
    </SuccessWrapper>
  </Layout>
)

export default SuccessPage
