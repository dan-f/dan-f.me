import React, { Fragment } from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import P from '../components/P'
import breakpoints, { smallerThan } from '../utils/breakpoints'

const Grid = styled('div')({
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: '1fr 1fr 1fr',

  [smallerThan(breakpoints.small)]: {
    display: 'block',
  },
})

const IndexPage = () => (
  <Grid>
    <P>👋 Hello. I'm Dan.</P>
    <P>
      I'm interested in data, music, networks, and intersections therein. I'll
      be spending the summer at the{' '}
      <a href="https://www.recurse.com/" target="_blank">
        Recurse Center
      </a>{' '}
      in NYC.
    </P>
    <P>
      Check out some of my <Link to="/projects/">projects</Link>, and read my{' '}
      <Link to="/blog/">blog</Link> if you feel like it.
    </P>
  </Grid>
)

export default IndexPage
