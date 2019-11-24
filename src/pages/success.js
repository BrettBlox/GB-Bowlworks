import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import '../styles/success.css'

const Success = () => (
  <Layout>
    <div className="successWrapper">
      <div className="success">
        <h1>Success!</h1>
        <hr />
        <h2>
          Thank you for your message!
          <br />
          <br /> I will get back to you as soon as possible.
        </h2>
        <br />
        <div className="success__link">
          <Link id="successLink" to="/" type="button">
            BACK TO HOME PAGE &rarr;
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Success
