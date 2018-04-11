import React from 'react'
import styled, { css } from 'react-emotion'
import tinycolor from 'tinycolor2'

import H1 from '../H1'
import H2 from '../H2'
import Link from '../Link'
import palette from '../../utils/palette'

const Header = styled('header')({
  alignItems: 'baseline',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export default ({ id, frontmatter, fields: { slug } }) => (
  <article aria-label="Blog post preview">
    <Header>
      <H1>
        <Link to={slug}>{frontmatter.title}</Link>
      </H1>
      <H2>{frontmatter.date}</H2>
    </Header>
    <p>{frontmatter.excerpt}</p>
  </article>
)
