const path = require('path')
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postPage = path.resolve('./src/components/templates/postTemplate.js')

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
      }
    `).then(results => {
      if (results.errors) {
        Promise.reject(results.errors)
      }

      // create blog post pages
      const posts = results.data.posts.edges
      posts.forEach(({ node }) => {
        createPage({
          path: `/blog/${slugify(node.frontmatter.slug, { replacement: '-', lower: true })}`,
          component: postPage,
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })

      resolve()
    })
  })
}
