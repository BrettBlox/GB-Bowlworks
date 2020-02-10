import { css } from 'styled-components'

const gallery = css`
  .my-masonry-grid {
    background-color: #173e43;
    display: flex;
    margin-left: -30px;
    /* gutter size offset */
    width: auto;
    margin: 0 auto;
    padding: 10px;
  }

  .my-masonry-grid_column {
    padding: 10px;
    /* gutter size */
    padding-top: 20px;
    background-clip: padding-box;

    & > .box {
      background-color: #173e43;
      display: inline-block;
      margin: 0 auto;
      width: 100%;
      border-radius: 4px;
      padding-bottom: 10px;

      img {
        width: 100%;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.5) 6px 8px 20px;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transform: rotate3d(0, 0, 0, 0deg) scale(1);
        transition: all 0.3s ease 0s;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.7) 10px 14px 20px;
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
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .box {
      img {
      border-radius: 4px;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
      width: 100%;
    }
  }

  /* Anything smaller than Iphone 6 */
  @media only screen and (max-width: 350px) {
    .box {
      padding-right: 20px;
    }
  }
`

export default gallery