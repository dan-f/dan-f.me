import React from 'react'
import styled, { injectGlobal } from 'react-emotion'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import globalStyles from '../utils/globalStyles'
import palette from '../utils/palette'

injectGlobal(globalStyles)

const PageContainer = styled('div')({
  height: '100vh',
  padding: '0 50px',
  margin: 'auto',
  maxWidth: 960,
})

const TemplateWrapper = ({
  children,
  data: { site: { siteMetadata: { title } } },
}) => (
  <div>
    <Helmet
      title={`${title} - Home`}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <PageContainer>
      <Header />
      <main>{children()}</main>
    </PageContainer>
  </div>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
