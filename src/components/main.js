import React from 'react'
import { Link } from 'gatsby'

import Cover from '../styles/cover'

const Main = () => (
  <Cover>
    <h1>WELCOME TO GB BOWLWORKS</h1>
    <p>
      GB Bowlworks, LLC, is a woodturning business based in Oklahoma, owned and operated by me,{' '}
      <Link to='/about'>Greg Bloxom</Link>. Most of the bowls and vessels that I make are segmented, meaning, rather
      than turned from one large piece of wood, mine are made from many "segments." These individual segments are then
      glued together to form rings with varying diameters which are then stacked and glued together to form a segmented
      turning blank, ready to be mounted on the lathe and finished. The beauty of segmented turning is the ability to
      use various species of hardwood, combining them into intricate patterns and shapes, resulting in a piece that will
      complement your home or business. I use no stains, dyes, paint or coloring of any kind; the color you see is the
      natural color of each species of hardwood used. The gallery below has a few of the past and present pieces out of
      my studio. Current inventory is available for purchase on the Store page. Questions? Feel free to send a message
      on the Contact page. I'm also on&nbsp;
      <a href='https://www.instagram.com/gbbowlworks/'>Instagram</a>.
      <br />
      <br />
      Thanks for stopping by!
      <br />
      <br />
      -Greg
    </p>
  </Cover>
)

export default Main
