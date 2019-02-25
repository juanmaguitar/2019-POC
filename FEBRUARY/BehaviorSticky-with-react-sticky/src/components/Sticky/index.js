import React, { Component } from 'react'

import { Sticky, StickyContainer } from 'react-sticky'

import './index.scss'

class Header extends Component {
  render () {
    const { style } = this.props
    return (
      <div style={style}>
        <h1>My Title</h1>
      </div>
    )
  }
}

const _Sticky = props => {
  // const { children, relative, topOffset, bottomOffset } = props
  // const stickyProps = { relative, topOffset, bottomOffset }

  return (
    <div>
      <Sticky>{({ style }) => <Header style={style} />}</Sticky>
      { props.children }
      { /* <h2 className="text-center">{'<StickyContainer />'}</h2> */}
    </div>
  )
}

export default _Sticky

/*
      <StickyContainer className="container">
        <Sticky {...stickyProps}>
          {stickyProps => {
            console.log(stickyProps)
            return (
              <div style={stickyProps.style}>
                {children}
              </div>
            )
          }}
        </Sticky>
      </StickyContainer>
      */
