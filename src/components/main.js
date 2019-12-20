import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Cover = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
`

const Description = styled.div`
  padding: 20px;
  text-align: center !important;
  font-family: 'Cinzel';
  background-color: #dddfd4;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  grid-column: 1 / -1;

  h1 {
    color: hsl(0, 100%, 18%);
    font-size: 2.25rem;

    @media only screen and (max-width: 650px) {
      font-size: 2.25rem;
    }

    @media only screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }

  p {
    text-align: center;
    line-height: 1.4;
    font-size: 1.3rem;
    font-weight: bold;
    padding-left: 30px;
    padding-right: 30px;
    font-family: 'Quattrocento', serif;

    @media only screen and (max-width: 650px) {
      line-height: 1.2;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  a {
    display: inline-block;
    text-align: left;
    background-color: hsl(0, 100%, 18%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #d7a150, #d7a150 50%, hsl(0, 100%, 18%) 50%);
    background-size: 200% 100%;
    background-position: 100%;
    transition: all 0.3s;

    &:hover {
      transform: skew(-15deg);
      background-position: 0%;
    }
  }
`

const Main = () => (
  <Cover>
    <Description>
      <h1>WELCOME TO GB BOWLWORKS</h1>
      <hr />
      <p>
        GB Bowlworks, LLC, is a woodturning business based in Oklahoma, owned and operated by me,{' '}
        <Link to='/about'>Greg Bloxom</Link>. Most of the bowls and vessels that I make are segmented, meaning, rather
        than turned from one large piece of wood, mine are made from many "segments." These individual segments are then
        glued together to form rings with varying diameters which are then stacked and glued together to form a
        segmented turning blank, ready to be mounted on the lathe and finished. The beauty of segmented turning is the
        ability to use various species of hardwood, combining them into intricate patterns and shapes, resulting in a
        piece that will complement your home or business. I use no stains, dyes, paint or coloring of any kind; the
        color you see is the natural color of each species of hardwood used. The gallery below has a few of the past and
        present pieces out of my studio. Current inventory is available for purchase on the Store page. Questions? Feel
        free to send a message on the Contact page. I'm also on&nbsp;
        <a href='https://www.instagram.com/gbbowlworks/'>Instagram</a>.
        <br />
        <br />
        Thanks for stopping by!
        <br />
        <br />
        -Greg
      </p>
    </Description>
  </Cover>
)

export default Main
