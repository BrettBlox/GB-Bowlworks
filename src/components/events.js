import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import '../styles/events.css'

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
      <>
        <div className="events cover">
          <div className="events card description">
            <h2>2019 Events</h2>
            <hr />
            <ul className="eventList">
              {allMarkdownRemark.edges.map(edge => (
                <div key={edge.node.frontmatter.title}>
                  <li className="eventItem" >
                    <h3 className="eventInfo">{edge.node.frontmatter.date}</h3>
                    <h3 className="eventTitle">
                      <a
                        className="eventLink"
                        target="_blank"
                        href={edge.node.frontmatter.url}
                      >
                        {edge.node.frontmatter.title}
                      </a>
                      &rarr;
                    </h3>
                    <h3 className="eventInfo">
                      {edge.node.frontmatter.location}
                    </h3>
                  </li>
                  <hr />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </>
    )}
  />
)

export default Event
