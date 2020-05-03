const path = require('path')
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postPage = path.resolve('./src/components/templates/postTemplate.js')
  const storePage = path.resolve('./src/components/templates/storeTemplate.js')
  const tagPage = path.resolve('./src/components/templates/tagTemplate.js')
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
                tag
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark {
          group(field: frontmatter___tag) {
            fieldValue
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

      const store = results.data.store.edges
      store.forEach(({ node }) => {
        createPage({
          path: `/store${node.frontmatter.slug}`,
          component: storePage,
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })

      const tags = results.data.tagsGroup.group
      tags.forEach(tag => {
        createPage({
          path: `/store/${slugify(tag.fieldValue, { replacement: '-', lower: true })}/`,
          component: tagPage,
          context: {
            tag: tag.fieldValue,
          },
        })
      })

      resolve()
    })
  })
}
