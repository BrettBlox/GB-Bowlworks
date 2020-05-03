import styled, { css } from 'styled-components'

const storeTemplate = css`
  .storeWrapper {
    border-radius: 4px;
    box-shadow: 0 1rem 2rem var(--color-shadow);
    padding: 1.875rem;
    display: grid;
    grid-column-gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    font-family: 'Cinzel', serif;
    margin: 1.875rem;
    background-color: var(--color-light);

    .body {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      img {
        margin: 0 1rem;
        width: 200px;
        height: auto;
        border-radius: 4px;
        box-shadow: 0 1rem 2rem var(--color-shadow);
        transition: all 0.3s;

        &:hover {
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
          transform: translateY(-15px) scale(1.5);
        }
      }
    }

    .store-item-content {
      display: flex;

      .store-item {
        border-radius: 4px;
        padding: 1.875rem;
        display: grid;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: 0;
        & > h1 {
          margin: 0;
          color: var(--blood);
        }
        & > h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-family: 'Quattrocento', serif;
          text-align: left;
          font-weight: bold;
          font-size: 1.25rem;
          justify-content: space-between;
          margin: 0;
        }
        & > h2 {
          font-size: 1.5rem;
        }
        & > a > button {
          box-shadow: 0 1rem 2rem var(--color-shadow);
          background-color: var(--baby);
          border-radius: 5px;
          border: none;
          padding: 10px 25px;
          width: 100%;
          height: 50px;
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          transition: all 0.3s;
          color: #fff;
          text-decoration: none;

          &:hover {
            background-color: var(--blood);
            cursor: pointer;
            transform: translateY(-3px);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .store-item-image > img {
      border-radius: 4px;
      box-shadow: 0 1rem 2rem var(--color-shadow);
      width: 100%;
      max-width: 650px;
      height: auto;
    }
  }

  @media only screen and (max-width: 550px) {
    .storeWrapper {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      margin: 1.875rem 1.25rem;
      padding: 1.25rem;
    }
    .body img {
      width: 100%;
      margin: 0 auto;
    }
    .store-item-content {
      .store-item {
        padding: 0px;
        margin: 0 auto;
        & > h3,
        h4,
        p {
          font-size: 1rem;
        }
        & > h1 {
          font-size: 2rem;
          margin-top: 1.25rem;
        }
      }
    }
  }
`

export default storeTemplate
