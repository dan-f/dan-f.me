/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({
  node,
  getNode,
  boundActionCreators: { createNodeField },
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.join('/blog/', createFilePath({ node, getNode }))
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) => (
  new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blogPost.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
)
