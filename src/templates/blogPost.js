import React from 'react'
import styled, { css } from 'react-emotion'

import H1 from '../components/H1'
import H2 from '../components/H2'
import Link from '../components/Link'
import breakpoints, { smallerThan } from '../utils/breakpoints'

const Layout = styled('div')({
  display: 'grid',
  gridTemplateColumns: '8rem auto',
  [smallerThan(breakpoints.small)]: {
    display: 'flex',
  },
})

const TitleBlock = styled('div')({
  alignItems: 'baseline',
  borderBottom: '1px solid',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  paddingBottom: '1rem',
})

export default ({ data: { markdownRemark: post } }) => (
  <article>
    <Layout>
      <header className={css({ display: 'contents' })}>
        <nav>
          <Link to="/blog">← Back</Link>
        </nav>
        <TitleBlock>
          <H1 className={css({ marginRight: '0.5rem' })}>
            {post.frontmatter.title}
          </H1>
          <H2>{post.frontmatter.date}</H2>
        </TitleBlock>
      </header>
      <div
        className={css({ gridColumn: 2 })}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  </article>
)

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
