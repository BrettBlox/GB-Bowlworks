import React from 'react'
import styled from 'styled-components'

import useForm from '../hooks/use-form'

import FadeWrapper from '../components/fadeWrapper'
import Layout from '../components/layout'

const ContactWrapper = styled.div`
  margin: 0 auto;
  padding: 1.875rem;
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));

  @media only screen and (max-width: 550px) {
    padding: 1.875rem 1.25rem;
  }
`

const ContactForm = styled.div`
  box-shadow: 0 1rem 2rem var(--color-shadow);
  grid-column: 1 / -1;
  background-color: var(--color-light);
  width: auto;
  height: auto;
  padding: 1.875rem 50px 0;
  margin: 0 auto;
  border-radius: 5px;

  h1 {
    padding-right: 0;
    float: none;
    text-align: center;
    align-items: center;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: var(--color-text);
      width: 100%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    @media only screen and (max-width: 650px) {
      font-size: 1.75rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  span {
    display: inline-block;
    color: red;
    font-family: var(--font-base-family);

    &:last-child {
      padding-top: 0.875rem;
      padding-bottom: 0.875rem;
    }
  }

  label {
    font-family: var(--font-base-family);
    font-size: 1.25rem;
    font-weight: bold;
  }

  input {
    transition: border-color 0.5s ease-out;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1.875rem;
    font-size: 0.875rem;
    box-shadow: 0 2px 10px var(--color-shadow);
    border-radius: 4px;
    border: none;

    &:focus {
      border: 3px solid var(--baby);
      box-shadow: 0 0 10px 0 var(--baby);
    }
  }

  textarea {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    font-size: 0.875rem;
    box-shadow: 0 2px 10px var(--color-shadow);
    border-radius: 4px;
    border: none;

    &:focus {
      border: 3px solid var(--baby);
      box-shadow: 0 0 10px 0 var(--baby);
    }

    @media only screen and (max-width: 650px) {
      height: 240px;
    }

    @media only screen and (max-width: 550px) {
      height: 160px;
    }
  }

  button {
    background-color: var(--baby);
    border-radius: 5px;
    border: none;
    padding: 10px 25px;
    color: #fff;
    text-shadow: 1px 1px 1px #949494;
    width: 100%;
    height: auto;
    font-family: 'Cinzel', serif;
    font-size: 1.25rem;
    transition: all 0.3s;
    box-shadow: 0 1rem 2rem var(--color-shadow);

    &:hover {
      background-color: var(--blood);
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
    }
  }

  @media only screen and (max-width: 650px) {
    width: auto;
  }

  @media only screen and (max-width: 550px) {
    width: auto;
    height: auto;
    padding: 1.875rem;
  }
`

export default function Contact() {
  const { handleSubmit, handleInputChange, state } = useForm()

  return (
    <FadeWrapper>
      <Layout title='Contact'>
        <ContactWrapper>
          <ContactForm>
            <h1>
              CONTACT
              <br /> GB BOWLWORKS
            </h1>
            <form
              name='contact'
              method='post'
              action='/success'
              onSubmit={handleSubmit}
              data-netlify='true'
              data-netlify-honeypot='bot-field'
            >
              <input type='hidden' name='bot-field' onChange={handleInputChange} />
              <input type='hidden' name='form-name' value='contact' />
              <span>*</span>
              <label htmlFor='name'>
                Name:
                <br />
                <input
                  type='text'
                  name='name'
                  required
                  autoComplete='off'
                  autoCapitalize='words'
                  autoCorrect='off'
                  onChange={handleInputChange}
                  value={state.name}
                />
              </label>
              <br />
              <span>*</span>
              <label htmlFor='email'>
                Email:
                <br />
                <input
                  type='email'
                  name='email'
                  autoComplete='off'
                  autoCapitalize='none'
                  autoCorrect='off'
                  onChange={handleInputChange}
                  pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$'
                  required
                  value={state.email}
                />
              </label>
              <label htmlFor='tel'>
                Phone Number:
                <br />
                <input type='tel' name='phone' onChange={handleInputChange} />
              </label>
              <br />
              <span>*</span>
              <label htmlFor='message'>
                Message:
                <br />
                <textarea
                  name='message'
                  autoComplete='off'
                  autoCapitalize='on'
                  autoCorrect='off'
                  onChange={handleInputChange}
                  required
                  value={state.message}
                />
              </label>
              <div data-netlify-recaptcha='true' />
              <br />
              <button type='submit'>Send</button>
            </form>
            <span>* required</span>
          </ContactForm>
        </ContactWrapper>
      </Layout>
    </FadeWrapper>
  )
}
