import React from 'react'
import Helmet from 'react-helmet'

import BlogPreview from '../../components/BlogPreview'
import H1 from '../../components/H1'
import SrOnly from '../../components/SrOnly'

export default ({
  data: { site: { siteMetadata: { title } }, allMarkdownRemark: { edges } },
}) => (
  <div>
    <Helmet title={`${title} - Blog`} />
    <section>
      <SrOnly>
        <H1 style={{ textAlign: 'center' }}>Blog</H1>
      </SrOnly>
      {edges.map(({ node }) => <BlogPreview key={node.id} {...node} />)}
    </section>
  </div>
)

export const query = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            excerpt
          }
        }
      }
    }
  }
`
