import styled from 'styled-components'

const Cover = styled.section`
  text-align: ${props => (props.text ? props.text : 'left')};
  margin: ${props => (props.margin ? props.margin : '1.875rem 1.25rem 0 1.25rem')};
  padding: 1.5rem;
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  background-color: var(--color-light);
  box-shadow: 0 1rem 2rem var(--color-shadow);
  border-radius: 4px;
  width: ${props => (props.width ? props.width : 'auto')};

  h1 {
    @media only screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }

  h1,
  h2 {
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

  h3 {
    font-size: 1.5rem;
    color: var(--blood);
    text-transform: uppercase;
    margin: 2rem 0;
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
