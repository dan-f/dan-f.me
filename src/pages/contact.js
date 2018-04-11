import React from 'react'
import styled from 'react-emotion'

import H1 from '../components/H1'
import InlineMono from '../components/InlineMono'
import SrOnly from '../components/SrOnly'
import palette from '../utils/palette'

export default () => (
  <section>
    <header>
      <SrOnly>
        <H1>Contact</H1>
      </SrOnly>
    </header>
    <div>
      Drop me a line! You can reach me at <InlineMono>danfriedman@pm.me</InlineMono>.
    </div>
  </section>
)
