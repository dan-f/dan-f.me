import React from 'react'
import Helmet from 'react-helmet'

import H1 from '../components/H1'

export default ({ data: { site: { siteMetadata: { title } } } }) => (
  <section>
    <Helmet title={`${title} - Projects`} />
    <H1>🚧 Coming soon</H1>
  </section>
)

export const query = graphql`
  query ProjectIndexQuery {
    ...SiteMetadata
  }
`
