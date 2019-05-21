import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import '../styles/event.css'

const EVENTS_QUERY = graphql`
  query upcomingEvents {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/events/*.md" } }
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            url
            date
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
      <>
        <aside className="events">
          <h2>Upcoming Events</h2>
          <hr />
          <ul className="eventsList">
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.title}>
                <h3>
                  <Link to={edge.node.frontmatter.url}>
                    {edge.node.frontmatter.title}
                  </Link>
                </h3>
                {edge.node.frontmatter.date}
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
)

export default Event
