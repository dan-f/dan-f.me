import styled from 'react-emotion'
import tinycolor from 'tinycolor2'

import palette from '../../utils/palette'

export default styled('h2')({
  color: tinycolor(palette.dark)
    .lighten(10)
    .toHexString(),
  fontWeight: 'normal',
  fontSize: '1.25rem',
  margin: 0,
})
