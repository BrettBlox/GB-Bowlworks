import styled from 'styled-components'

const Cover = styled.section`
  text-align: center;
  margin-top: 1.875rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  padding: 1.5rem;
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  display: grid;
  text-align: center;
  background-color: var(--color-light);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  h1 {
    @media only screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }

  h1,
  h2 {
    color: var(--blood);
    font-size: 2.25rem;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: var(--color-text);
      width: 100%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-weight: bold;
    padding-left: 1.875rem;
    padding-right: 1.875rem;

    @media only screen and (max-width: 650px) {
      line-height: 1.2;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  a {
    display: inline-block;
    text-align: left;
    background-color: var(--blood);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, var(--gold), var(--gold) 50%, var(--blood) 50%);
    background-size: 200% 100%;
    background-position: 100%;
    transition: all 0.3s;

    &:hover {
      transform: skew(-15deg);
      background-position: 0%;
    }
  }
`

export default Cover
