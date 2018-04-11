import styled from 'react-emotion'

// CSS taken from https://github.com/twbs/bootstrap/blob/10c64bdae867c0dcc808a68af12d551710baea8d/scss/mixins/_screen-reader.scss
export default styled('div')`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
