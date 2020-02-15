import { css } from 'styled-components'

const gallery = css`
  .my-masonry-grid {
    background-color: var(--deep);
    display: flex;
    margin-left: -1.875rem;
    /* gutter size offset */
    width: auto;
    margin: 0 auto;
    padding: 10px;
  }

  .my-masonry-grid_column {
    padding: 10px;
    /* gutter size */
    padding-top: 1.25rem;
    background-clip: padding-box;

    & > .box {
      background-color: var(--deep);
      display: inline-block;
      margin: 0 auto;
      width: 100%;
      border-radius: 4px;
      padding-bottom: 10px;

      img {
        width: 100%;
        border-radius: 4px;
        box-shadow: var(--color-shadow) 6px 8px 1.25rem;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transform: rotate3d(0, 0, 0, 0deg) scale(1);
        transition: all 0.3s ease 0s;

        &:hover {
          box-shadow: var(--color-shadow) 10px .875rem 1.25rem;
          animation: 1s ease 0s 1 normal forwards running grow;
        }
      }
    }
  }

  @keyframes grow {
    0% {
      transform: rotate3d(0, 0, 0, 0deg) scale(1);
    }

    16% {
      transform: rotate3d(-0.5, -1, 0, 15deg) scale(1.01);
    }

    100% {
      transform: rotate3d(0, 0, 0, 0deg) scale(1.05);
    }
  }

  @media only screen and (max-width: 500px) {
    .grid-wrapper {
      z-index: -100;
      grid-gap: 15px;
      padding: 1.25rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .box {
      img {
      border-radius: 4px;
      box-shadow: 0 1rem 2rem var(--color-shadow);
      width: 100%;
    }
  }

  /* Anything smaller than Iphone 6 */
  @media only screen and (max-width: 350px) {
    .box {
      padding-right: 1.25rem;
    }
  }
`

export default gallery
