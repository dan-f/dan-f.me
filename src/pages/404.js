import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const NotFoundPage = ({ data: { site: { siteMetadata: { title } } } }) => (
  <section>
    <Helmet title={`${title} - Not Found`} />
    <h1>Oops! 😳</h1>
    <p>
      I can't find this page. Double-check the URL, and if you think you've
      found a broken link, <Link to="/contact/">let me know.</Link>
    </p>
  </section>
)

export const query = graphql`
  query NotFoundPageQuery {
    ...SiteMetadata
  }
`

export default NotFoundPage
