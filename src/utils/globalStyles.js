import palette from './palette'

const linkFocusStyles = {
  borderWidth: '2px',
}

export default {
  body: {
    backgroundColor: palette.light,
    color: palette.dark,
  },

  a: {
    borderBottom: '1px solid',
    borderWidth: '0px',
    color: palette.primary,
    textDecoration: 'none',
    transition: 'border-width 0.05s',
  },

  li: {
    margin: 0,
  },

  'a:hover': linkFocusStyles,
  'a:focus': linkFocusStyles,
  'a.no-underline': {
    borderBottom: 0,
  },
  'a.nav-link-is-current-page': {
    ...linkFocusStyles,
    color: palette.primaryDark,
  },
}
