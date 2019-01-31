import React from 'react'
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

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <>
        <div className='site'>
          <SEO
            title='contact'
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
              `etsy`
            ]}
          />
          <Header />
          <div className='contactWrapper'>
            <div className='contact'>
              <h1>
                CONTACT
                <br /> GB BOWLWORKS
              </h1>
              <hr />
              <form
                name='contact'
                method='post'
                action='/success'
                onSubmit={this.handleSubmit}
                data-netlify='true'
                data-netlify-honeypot='bot-field'>
                <input
                  type='hidden'
                  name='bot-field'
                  onChange={this.handleChange}
                />
                <label htmlFor='name'>
                  Name:
                  <br />
                  <input
                    type='text'
                    name='name'
                    required
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label htmlFor='email'>
                  Email:
                  <br />
                  <input
                    type='email'
                    name='email'
                    onChange={this.handleChange}
                    pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$'
                    required
                  />
                </label>
                <label htmlFor='tel'>
                  Phone Number:
                  <br />
                  <input type='tel' name='phone' onChange={this.handleChange} />
                </label>
                <br />
                <label htmlFor='message'>
                  Message:
                  <br />
                  <textarea
                    name='message'
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <br />
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}