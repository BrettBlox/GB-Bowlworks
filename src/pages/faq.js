import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Faq = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  justify-content: center;
  font-family: 'Cinzel', serif;

  h1 {
    text-align: center;
    font-size: 2.25rem;
    color: var(--blood);
  }

  @media only screen and (max-width: 550px) {
    padding: 30px 20px;
  }
`

const FaqBox = styled.div`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: var(--color-light);
  width: 60vw;
  height: auto;
  margin: 0 auto;
  border-radius: 5px;
  text-align: left;
  padding: 20px 50px 50px;
  transition: all 0.3s;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--blood);
    text-transform: uppercase;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    color: black;
    transition: all 0.3s;
    line-height: 1.4;
  }

  @media only screen and (max-width: 550px) {
    margin: 0;
    padding: 20px;
    width: auto;
  }
`

const ContactLink = styled(Link)`
  z-index: 1;
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
    background-position: 0%;
    transform: skew(-15deg);
  }
`

const FAQ = () => (
  <Layout title='FAQ'>
    <Faq>
      <FaqBox>
        <h1>FAQ</h1>
        <hr />
        <br />
        <div>
          <h3>Q: What does “segmented” mean?</h3>
          <br />
          <p>
            A: I get asked this all the time. Most of the bowls and vessels I make are segmented, meaning, rather than
            cut from one large piece of wood, mine are made from many pieces of wood. These individual segments (wedges)
            are then glued together to form different diameter rings and the rings are then stacked and glued together
            to form a segmented turning blank, ready to be mounted on the lathe and finished.
          </p>
          <br />
          <h3>Q: How long does it take to make a segmented bowl?</h3>
          <br />
          <p>
            A: Depending on the complexity of the design and number of segments involved, these vessels can take from a
            couple of days for a piece with as few 100 to 200 segments, all the way up to five or six days for a piece
            with 1500 segments and more.{' '}
          </p>
          <br />

          <h3> Q: What are the advantages of doing segmented bowls over traditional one-piece bowls?</h3>
          <br />
          <p>
            A: Doing segmented work is unique in that I use dimensional hardwood lumber that I buy from any number of
            sources, and then immediately cut into segments, glue up, and start turning right away. In contrast to
            segmented turning, wet turning is taking a downed tree (or taking down a tree!) and then chainsawing into
            blanks, which requires a little more muscle and time. Solid wood from a stump is not kiln dried, therefore
            it is wet. Wet turning requires turning it to a rough shape and then, if you’re lucky enough to have access
            to a kiln, kiln-drying it for 30 days or so and then final turning on the lathe and finishing. If you don’t
            have the pleasure of having a kiln, then you need time…time for the wet rough-turned piece to adequately dry
            before final turning and finishing. The old rule of thumb is 1 year of drying for every 1 inch of bowl
            thickness.
          </p>
          <br />

          <h3>Q: What’s my favorite wood to work with?</h3>
          <br />
          <p>
            A: That’s a tough question! I can’t pick just one wood, so I’ll pick two. I’d say my favorite two woods for
            turning are domestic Walnut and Cherry. They are readily available where I live, they are soft enough yet
            stable enough and pretty forgiving, and they turn very nicely on the lathe . They are both really warm-toned
            woods and finish beautifully. A close second to Cherry and Walnut would be Maple.
          </p>
          <br />

          <h3>Q: How do I design my bowls and vessels? </h3>
          <br />
          <p>
            A: For the last couple of years I’ve used segmenting software that helps me quickly do the design work. It’s
            nice because the math is done for me. Before using the computer and software to design with, I did it the
            old fashioned way, with grid paper and a ruler, and a little pie…Pi, rather, 3.14159!! To calculate each
            segment’s edge length, you multiple the diameter of each ring of segments you plan to make times Pi, divided
            by the number of segments. For a ring of 12 segments with a 10” diameter, the formula to determine the edge
            length of each of those segments would look like this: 10 (diameter) X 3.14159 (Pi) divided by 12. That
            gives a fairly accurate number to take to the saw to begin cutting segments. Time consuming? Yes. I love
            computers and software, so it was a no-brainer to go digital for bowl construction.{' '}
          </p>
          <br />

          <h3>Q: What is the best part of segmenting?</h3>
          <br />
          <p>
            A: No question, the best part of segmenting is the ability to use different and contrasting specie of wood
            and coordinate them into a design that makes most people say “WOW, how’d you do that?!” Mixing Wenge (an
            almost black wood) with Padauk (a dark reddish-orange wood) with Yellow Heart (obviously a yellow toned
            wood) and Maple (an off-white color) produces a real eye-popping piece!
          </p>
          <br />

          <h3>Q: What finish do I use on my pieces?</h3>
          <br />
          <p>
            A: I make two types of vessels, a decorative style and a food-safe style (salad bowls, pasta, etc.) Each
            type is finished differently. For the decorative vessels, I use a shellac-based high build friction polish
            which produces a beautiful, smooth sheen that compliments the natural beauty of the wood. Some pieces then
            get a coat of carnauba wax and beeswax that results in a shine that is lasting and lustrous. For food-safe
            vessels, I use multiple coats of simple mineral oil, which is readily available at any pharmacy and can be
            reapplied for the life of the bowl.
          </p>
          <br />

          <h3>Q: What are the use and care suggestions for decorative and food-safe vessels?</h3>
          <br />
          <p>
            A: Decorative bowls look great as a table centerpiece, on your fireplace mantel or on a bookshelf.
            Decorative vessels and bowls are suitable to hold dry foods like whole fruits, nuts, or packaged candies,
            etc. Food-safe bowls are suitable for such things as salad, pasta or popcorn. Avoid wet foods. I have a
            great story about a friend’s salad bowl in the Blog section. To clean your bowl, wipe out with a damp cloth
            and dry immediately, FOR ANY WOODEN BOWL/VESSEL, DO NOT EVER LEAVE SUBMERGED IN WATER OR PLACE IN A
            DISHWASHER!!
          </p>
          <br />

          <h3>Q: More questions?</h3>
          <br />
          <p>
            A: Send me a message through the <ContactLink to='/contact'>contact page</ContactLink> here and I’ll be glad
            to answer your questions.
          </p>
        </div>
      </FaqBox>
    </Faq>
  </Layout>
)

export default FAQ
