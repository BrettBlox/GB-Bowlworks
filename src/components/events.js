import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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

  h2 {
    text-align: center;
    color: var(--blood);
    font-size: 2.25rem;
  }
`

const EventList = styled.ul`
  margin: 0 auto;
  width: 50vw;
  padding: 1rem;

  li {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      display: list-item;
    }
  }

  @media only screen and (max-width: 920px) {
    width: auto;
  }
`

const EventTitle = styled.h3`
  font: 700 20px 'Cinzel', sans-serif;
  background-color: var(--blood);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #d7a150, #d7a150 50%, var(--blood) 50%);
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
        <Description>
          <h2>2019 Events</h2>
          <hr />
          <EventList>
            {allMarkdownRemark.edges.map(edge => (
              <div key={edge.node.frontmatter.title}>
                <li>
                  <h3>{edge.node.frontmatter.date}</h3>
                  <EventTitle>
                    <a target='_blank' rel='noopener noreferrer' href={edge.node.frontmatter.url}>
                      {edge.node.frontmatter.title}
                    </a>
                    &rarr;
                  </EventTitle>
                  <h3>{edge.node.frontmatter.location}</h3>
                </li>
                <hr />
              </div>
            ))}
          </EventList>
        </Description>
      </Cover>
    )}
  />
)

export default Event
