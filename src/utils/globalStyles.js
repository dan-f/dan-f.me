import palette from './palette'

const linkFocusStyles = {
  // borderBottom: '2px solid',
}

export default {
  body: {
    backgroundColor: palette.light,
    color: palette.dark,
  },

  a: {
    // borderBottom: '1px solid',
    // color: palette.primary,
    textDecoration: 'none',
    // transition: 'border-bottom 0.1s',
  },

  'a:hover': linkFocusStyles,
  'a:focus': linkFocusStyles,
}
