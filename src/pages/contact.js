import React, { useState } from 'react'
import { navigateTo } from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

import '../styles/index.css'
import '../styles/contact.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const useForm = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...inputs,
        }),
      })
        .then(() => navigateTo(form.getAttribute('action')))
        .catch(error => alert(error))
    }
  }

  const handleInputChange = e => {
    e.persist()
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  }
}

export default function Contact() {
  const { inputs, handleInputChange, handleSubmit } = useForm()

  return (
    <>
      <div className="site">
        <SEO
          title="contact"
          keywords={[
            `about`,
            `woodworking`,
            `jenks`,
            `oklahoma`,
            `fine woodworking`,
            `woodturning`,
            `woodworker`,
            `craftsmanship`,
            `art`,
            `semengted`,
            `wood`,
            `art`,
            `craft`,
            `handmade`,
            `etsy`,
          ]}
        />
        <Header />
        <div className="contactWrapper">
          <div className="contact">
            <h1>
              CONTACT
              <br /> GB BOWLWORKS
            </h1>
            <hr />
            <form
              name="contact"
              method="post"
              action="/success"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="bot-field"
                onChange={handleInputChange}
              />
              <label htmlFor="name">
                Name:
                <br />
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label htmlFor="email">
                Email:
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                  required
                />
              </label>
              <label htmlFor="tel">
                Phone Number:
                <br />
                <input type="tel" name="phone" onChange={handleInputChange} />
              </label>
              <br />
              <label htmlFor="message">
                Message:
                <br />
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div data-netlify-recaptcha="true" />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
