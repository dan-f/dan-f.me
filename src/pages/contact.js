import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import H1 from '../components/H1'
import InlineMono from '../components/InlineMono'
import SrOnly from '../components/SrOnly'
import palette from '../utils/palette'

export default ({ data: { site: { siteMetadata: { title } } } }) => (
  <section>
    <Helmet title={`${title} - Contact`} />
    <header>
      <SrOnly>
        <H1>Contact</H1>
      </SrOnly>
    </header>
    <div>
      <InlineMono>danfriedman@pm.me</InlineMono>
    </div>
  </section>
)

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
