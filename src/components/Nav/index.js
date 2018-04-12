import React from 'react'
import styled from 'react-emotion'

import NavLink from '../NavLink'
import breakpoints, { smallerThan } from '../../utils/breakpoints'
import palette from '../../utils/palette'

const Ul = styled('ul')({
  alignItems: 'baseline',
  display: 'flex',
  justifyContent: 'flex-end',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
})

const Li = styled('li')({
  margin: 0,
  marginLeft: '1rem',

  [smallerThan(breakpoints.small)]: {
    marginLeft: 0,
    marginRight: '1rem',
  },
})

export default () => (
  <nav>
    <Ul>
      <Li>
        <NavLink to="/">home</NavLink>
      </Li>
      <Li>
        <NavLink to="/projects/">projects</NavLink>
      </Li>
      <Li>
        <NavLink to="/blog/">blog</NavLink>
      </Li>
      <Li>
        <NavLink to="/contact/">contact</NavLink>
      </Li>
    </Ul>
  </nav>
)
