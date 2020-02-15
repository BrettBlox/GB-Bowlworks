import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveWrapper = styled.aside`
  margin: 1.875rem;
  margin-left: 0;
  padding: 1.25rem;
  font-family: 'Cinzel';
  background-color: var(--color-light);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  ul {
    padding: 0;
    margin: 0 auto;
    display: block;
    list-style: none;

    a {
      display: inline-block;
      font: 700 1.25rem 'Cinzel', sans-serif;
      background-color: var(--blood);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to right, var(--gold), var(--gold) 50%, var(--blood) 50%);
      background-size: 200% 100%;
      background-position: 100%;
      padding: 0.8rem;
      transition: all 0.3s;

      &:hover {
        background-position: 0%;
        transform: translateY(-3px) scale(1.1);
      }

      @media only screen and (max-width: 1000px) {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/posts/*.md" } }
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <ArchiveWrapper>
        <h2>Archive</h2>
        <hr />
        <ul className='archiveList'>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </ArchiveWrapper>
    )}
  />
)

export default Archive
