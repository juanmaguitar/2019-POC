/* eslint-disable */
import React from 'react'
import cx from 'classname'

const BASE_CLASS = `sui-BehaviourSticky`
const CLASS_FIXED = `${BASE_CLASS}-fixed-child`
const CLASS_FIXED_BOTTOM = `${CLASS_FIXED}--bottom`

const withFixedBottom = BaseComponent => props => (
  <BaseComponent {...props} className={`${props.className ? props.className : ''} ${cx(CLASS_FIXED, CLASS_FIXED_BOTTOM)}`} />
)

const Footer = (props) => (
  <div {...props}>
    {props.children}
  </div>
)

const FooterFixedBottom = withFixedBottom(Footer)

export { 
  Footer,
  FooterFixedBottom
}
