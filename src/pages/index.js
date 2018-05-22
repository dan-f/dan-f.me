import React, { Fragment } from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import P from '../components/P'
import breakpoints, { smallerThan } from '../utils/breakpoints'

import dan from '../../static/dan.jpg'

const Grid = styled('div')({
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: '1fr 1fr 1fr',

  alignItems: 'center',

  [smallerThan(breakpoints.small)]: {
    display: 'block',
  },
})

const Avatar = styled('img')({
  borderRadius: '50%',
  width: 200,
})

const IndexPage = () => (
  <Grid>
    <Avatar src={dan} alt="Dan on his fire escape" />
    <P>
      <P>Hey, I'm Dan.</P>
      <div>
        I'm interested in data, music, networks, and intersections therein. I'm
        currently at the{' '}
        <a href="https://www.recurse.com/" target="_blank">
          Recurse Center
        </a>{' '}
        in NYC.
      </div>
    </P>
    <P>
      Check out some of my <Link to="/projects/">projects</Link>, and read my{' '}
      <Link to="/blog/">blog</Link> if you feel like it.
    </P>
  </Grid>
)

export default IndexPage
