import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Cover from '../styles/cover'

const EventList = styled.ul`
  margin: 0 auto;
  width: 60vw;
  padding: 1rem;

  li {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      display: list-item;
    }
  }

  @media only screen and (max-width: 91.25rem) {
    width: auto;
  }
`

const EventTitle = styled.h3`
  /* font-weight: 400; */
  background-color: var(--blood);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, var(--gold), var(--gold) 50%, var(--blood) 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.3s;
  text-decoration: none;
  text-decoration-color: var(--blood);
  transition: all 0.2s;

  &:hover {
    background-position: 0%;
    transform: translateY(-3px);
  }
`

const EVENTS_QUERY = graphql`
  query upcomingEvents {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/events/*.md" } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            url
            date(formatString: "MMMM DD, YYYY")
            location
          }
        }
      }
    }
  }
`

const Event = () => (
  <StaticQuery
    query={EVENTS_QUERY}
    render={({ allMarkdownRemark }) => (
      <Cover>
        <h2>Upcoming Events</h2>
        <EventList>
          {allMarkdownRemark.edges.map(edge => (
            <>
              <li key={edge.node.frontmatter.title}>
                <p>{edge.node.frontmatter.date}</p>
                <EventTitle>
                  <a target='_blank' rel='noopener noreferrer' href={edge.node.frontmatter.url}>
                    {edge.node.frontmatter.title}&nbsp;&rarr;
                  </a>
                </EventTitle>
                <p>{edge.node.frontmatter.location}</p>
              </li>
              <hr />
            </>
          ))}
        </EventList>
      </Cover>
    )}
  />
)

export default Event
