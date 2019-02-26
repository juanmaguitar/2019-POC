import React from 'react'
import * as ReactSticky from 'react-stickup'

const BASE_CLASS = `sui-BehaviourSticky`

const StickyProvider = ReactSticky.StickyProvider
const Sticky = (props) => {
  return (
    <ReactSticky.Sticky className={BASE_CLASS} {...props}>
      {props.children}
    </ReactSticky.Sticky>
  )
}

export {
  Sticky,
  StickyProvider
}
