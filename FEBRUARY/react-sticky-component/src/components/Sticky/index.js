import React from 'react'

import {StickyContainer, StuckContent} from 'components'

const Sticky = props => {
  const { children } = props
  return (
    <StickyContainer {...props}>
      <StuckContent>{children}</StuckContent>
    </StickyContainer>
  )
}

export default Sticky
