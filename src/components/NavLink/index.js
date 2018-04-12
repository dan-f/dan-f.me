import React from 'react'
import styled, { css } from 'react-emotion'
import { withRouter } from 'react-router'
import Link from 'gatsby-link'

import palette from '../../utils/palette'

export default props => (
  <Link activeClassName="nav-link-is-current-page" exact {...props} />
)
