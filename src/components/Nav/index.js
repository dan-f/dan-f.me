import React from 'react'
import styled from 'react-emotion'

import Link from '../Link'
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

const activeLinkStyle = {
  // color: palette.primaryDark,
  // borderBottom: '2px solid',
}

export default () => (
  <nav>
    <Ul>
      <Li>
        <Link to="/" navLink>
          home
        </Link>
      </Li>
      <Li>
        <Link to="/projects" navLink>
          projects
        </Link>
      </Li>
      <Li>
        <Link to="/blog" navLink>
          blog
        </Link>
      </Li>
      <Li>
        <Link to="/contact" navLink>
          contact
        </Link>
      </Li>
    </Ul>
  </nav>
)
