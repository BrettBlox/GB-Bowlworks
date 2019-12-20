import React, { useState } from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

import Layout from '../components/layout'

const ContactWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  font-family: 'Cinzel', serif;

  @media only screen and (max-width: 550px) {
    padding: 30px 20px;
  }
`

const ContactForm = styled.div`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  grid-column: 1 / -1;
  background-color: #dddfd4;
  width: auto;
  height: 760px;
  padding: 30px 50px 0;
  margin: 0 auto;
  border-radius: 5px;

  h1 {
    padding-right: 0;
    float: none;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: hsl(0, 100%, 18%);

    @media only screen and (max-width: 650px) {
      font-size: 1.75rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  label {
    font-size: 20px;
    font-weight: bold;
  }

  input {
    transition: border-color 0.5s ease-out;
    border: 1px solid #dadada;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    font-size: 14px;
    box-shadow: 0 0 10px;
  }

  textarea {
    border: 1px solid #dadada;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    font-size: 14px;
    box-shadow: 0 0 10px;
    border-radius: 5px;

    @media only screen and (max-width: 650px) {
      height: 240px;
    }

    @media only screen and (max-width: 550px) {
      height: 160px;
    }
  }

  button {
    background-color: #3fb0ac;
    border-radius: 5px;
    border: none;
    padding: 10px 25px;
    color: #fff;
    text-shadow: 1px 1px 1px #949494;
    width: 100%;
    height: auto;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    transition: all 0.3s;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: hsl(0, 100%, 18%);
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.9);
    }
  }

  @media only screen and (max-width: 650px) {
    width: auto;
  }

  @media only screen and (max-width: 550px) {
    width: auto;
    height: auto;
    padding: 30px;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
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
    <Layout title='Contact'>
      <ContactWrapper>
        <ContactForm>
          <h1>
            CONTACT
            <br /> GB BOWLWORKS
          </h1>
          <hr />
          <form
            name='contact'
            method='post'
            action='/success'
            onSubmit={handleSubmit}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <input type='hidden' name='bot-field' onChange={handleInputChange} />
            <label htmlFor='name'>
              Name:
              <br />
              <input type='text' name='name' required onChange={handleInputChange} />
            </label>
            <br />
            <label htmlFor='email'>
              Email:
              <br />
              <input
                type='email'
                name='email'
                onChange={handleInputChange}
                pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$'
                required
              />
            </label>
            <label htmlFor='tel'>
              Phone Number:
              <br />
              <input type='tel' name='phone' onChange={handleInputChange} />
            </label>
            <br />
            <label htmlFor='message'>
              Message:
              <br />
              <textarea name='message' onChange={handleInputChange} required />
            </label>
            <div data-netlify-recaptcha='true' />
            <br />
            <button type='submit'>Send</button>
          </form>
        </ContactForm>
      </ContactWrapper>
    </Layout>
  )
}
