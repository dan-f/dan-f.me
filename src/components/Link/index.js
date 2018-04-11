import React from 'react'
import styled, { css } from 'react-emotion'
import { withRouter } from 'react-router'
import Link from 'gatsby-link'

import palette from '../../utils/palette'

export default withRouter(
  class extends React.Component {
    state = {
      hasUserFocus: false,
    }

    setHasUserFocus = () => {
      this.setState({ hasUserFocus: true })
    }

    unsetHasUserFocus = () => {
      this.setState({ hasUserFocus: false })
    }

    matchesCurrentRoute = () => {
      const { location: { pathname }, to } = this.props
      if (to === '/') {
        return to === pathname
      }
      return pathname.startsWith(to)
    }

    getCurrentColor = () => {
      return this.props.navLink && this.matchesCurrentRoute()
        ? palette.primaryDark
        : palette.primary
    }

    linkProps = () => {
      const myProps = new Set([
        'crossDomain',
        'history',
        'location',
        'match',
        'navLink',
        'newTab',
        'noUnderline',
        'staticContext',
      ])
      return Object.keys(this.props)
        .filter(key => !myProps.has(key))
        .reduce((acc, cur) => ({ ...acc, [cur]: this.props[cur] }), {})
    }

    renderLink = () => {
      const { children, crossDomain, to, newTab } = this.props
      const className = css({
        color: this.getCurrentColor(),
      })
      return crossDomain ? (
        <a className={className} href={to} target={newTab && '_blank'}>
          {children}
        </a>
      ) : (
        <Link className={className} {...this.linkProps()} />
      )
    }

    renderUnderline = () => {
      const { navLink, noUnderline } = this.props
      if (noUnderline) {
        return null
      }
      const { hasUserFocus } = this.state
      const underlineWidth =
        hasUserFocus || (navLink && this.matchesCurrentRoute())
          ? '1px'
          : '0.5px'
      const boxShadow = `0 0 0 ${underlineWidth} ${this.getCurrentColor()}`
      return (
        <div className={css({ boxShadow, transition: 'box-shadow 0.1s' })} />
      )
    }

    render() {
      return (
        <div
          className={css({
            display: 'inline-block',
          })}
          onBlur={this.unsetHasUserFocus}
          onFocus={this.setHasUserFocus}
          onMouseEnter={this.setHasUserFocus}
          onMouseLeave={this.unsetHasUserFocus}
        >
          {this.renderLink()}
          {this.renderUnderline()}
        </div>
      )
    }
  }
)
