import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import H1 from '../H1'
import Nav from '../Nav'
import palette from '../../utils/palette'

import breakpoints, { smallerThan } from '../../utils/breakpoints'

const StyledHeader = styled('header')({
  alignItems: 'baseline',
  borderBottom: `2px solid`,
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  padding: '1rem 0',

  [smallerThan(breakpoints.small)]: {
    flexDirection: 'column',
  },
})

const Header = () => (
  <StyledHeader>
    <H1>
      <Link className="no-underline" to="/">
        Daniel Friedman
      </Link>
    </H1>
    <Nav />
  </StyledHeader>
)

export default Header
