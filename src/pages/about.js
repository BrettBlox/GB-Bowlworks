import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'

const AboutWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  font-family: 'Cinzel', serif;

  @media only screen and (max-width: 550px) {
    padding: 30px 20px;
  }
`

const About = styled.div`
  padding: 30px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  grid-column: 1 / -1;
  background-color: #dddfd4;

  img {
    margin-right: 20px;
    float: left;
    border-radius: 4px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    width: 600px;
    height: auto;

    @media only screen and (max-width: 950px) {
      display: block;
      width: 100%;
      height: auto;
      float: none;
      margin: 0 auto;
      margin-bottom: 1.3rem;
    }
  }

  h1 {
    text-align: center;
    color: hsl(0, 100%, 18%);
    font-size: 2.25rem;

    @media only screen and (max-width: 400px) {
      font-size: 1.5rem;
      padding: 0;
    }
  }

  p {
    line-height: 1.4;
    font-size: 1.3rem;
    font-family: 'Quattrocento', serif;

    @media only screen and (max-width: 550px) {
      line-height: 1.2;
    }
  }
`

const AboutPage = () => (
  <Layout>
      <AboutWrapper>
        <About>
          <h1>ABOUT GB BOWLWORKS</h1>
          <hr />
          <img
            src={require('../images/greg/gregandjasper.jpg')}
            alt="Greg Bloxom"
          />
          <p>
            I love woodworking. I love the satisfaction I get from making things
            out of wood. I love the feel and smell of wood. I even love peeling
            dried glue off my fingers after I make something
            <br />
            <br />
            I’m a woodworker, have been since as far back as I can remember. I
            come by it naturally...got it from my dad. Dad was a shade-tree
            mechanic, woodworker, electrician, plumber, etc., and I was his
            shadow. I took my dad’s interest in woodworking and refined it a
            little. I’ve zeroed in on bowl turning. Something about it just
            makes my day! To be able to take a piece of sometimes gnarly,
            cracked, warped wood and bring out the inner beauty by recycling it
            into something useful does something for me. Making something that
            will more than likely be around long after I am is just the neatest
            thing ever.
            <br />
            <br />
            ​In 1972 my dad bought a Shopsmith woodworking machine...you know,
            one of those do-it-all machines. It was a table saw, a lathe, a
            boring machine, a drill press, a disk sander, etc. I was 11 and
            really wanted to try the lathe out, so I mounted a 2x4 on it, spun
            it up, barely touched a gouge to the spinning wood...and promptly
            threw it off the lathe halfway across the garage! No one ever knew I
            did that, until now. I quickly realized I needed a little help
            figuring that machine out.
            <br />
            <br />
            In 1976, as a high school freshman, I enrolled in what ended up
            being the best class in the world for me...shop class. I made
            several pieces of furniture over the four years I was there, most of
            which are scattered around my mother’s home.
            <br />
            <br />
            Over the years I started accumulating woodworking equipment and made
            a lot of things. My first real lathe was a Jet 12-36. I took a class
            at a local woodworking store and made my first bowl. I still have
            it. It sits on my dresser and I put each day’s pocket change in it.
            I then stumbled onto segmented turning and made a few little
            bowls...and a spark was lit. I was right in the middle of raising
            kiddos at the time and told myself that one of these days I would
            focus more on getting better at segmented turning.
            <br />
            <br />
            ​Fast-forward a few years. My wife and I became empty-nesters and
            suddenly had a little more time on our hands. I discovered I had
            time to get more invested in segmented turning and began focusing
            most of my time on it. The little Jet 12-36 had served its purpose
            but it was time to upgrade to a more capable machine, one that would
            allow for larger vessels. After upgrading to a more substantial
            lathe, I’m now able to turn bowls up to 18” in diameter, which seems
            to be (at least for now) just right.
            <br />
            <br />I still consider myself a student of the art; there’s so much
            room for improvement in what I do, but even if I don’t get better,
            I’m having a great time doing what I’m doing. Thanks for reading my
            ramblings, and stay tuned for more GB Bowlworks masterpieces in the
            near future! <br />
            <br />
            Greg
          </p>
        </About>
      </AboutWrapper>
  </Layout>
)

export default AboutPage
