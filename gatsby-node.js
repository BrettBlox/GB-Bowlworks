const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postPage = path.resolve('./src/components/postTemplate.js')
  const storePage = path.resolve('./src/components/storeTemplate.js')
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/cms/posts/*.md" } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
        store: allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/cms/store/*.md" } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      if (results.errors) {
        Promise.reject(results.errors)
      }
      // create blog post pages
      results.data.posts.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: postPage,
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      results.data.store.edges.forEach(({ node }) => {
        createPage({
          path: `/store${node.frontmatter.slug}`,
          component: storePage,
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
