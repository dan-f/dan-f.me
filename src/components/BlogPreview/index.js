import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import tinycolor from 'tinycolor2'

import H1 from '../H1'
import H2 from '../H2'
import palette from '../../utils/palette'

const Header = styled('header')({
  alignItems: 'baseline',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export default ({ id, excerpt, frontmatter, fields: { slug } }) => (
  <article aria-label="Blog post preview">
    <Header>
      <div className={css({ paddingBottom: '0.5rem' })}>
        <H1>
          <Link to={slug}>{frontmatter.title}</Link>
        </H1>
      </div>
      <H2>{frontmatter.date}</H2>
    </Header>
    <p>{frontmatter.excerpt || excerpt}</p>
  </article>
)
