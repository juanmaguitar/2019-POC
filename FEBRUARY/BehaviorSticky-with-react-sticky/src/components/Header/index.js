/* eslint-disable */
import React from 'react'
import cx from 'classname'

const BASE_CLASS = `sui-BehaviourSticky`
const CLASS_FIXED = `${BASE_CLASS}-fixed-child`
const CLASS_FIXED_TOP = `${CLASS_FIXED}--top`

const withFixedTop = BaseComponent => props => (
  <BaseComponent {...props} className={`${props.className ? props.className : ''} ${cx(CLASS_FIXED, CLASS_FIXED_TOP)}`} />
)

const Header = (props) => (
  <div {...props}>
    {props.children}
  </div>
)

const HeaderFixedTop = withFixedTop(Header)

export { 
  Header,
  HeaderFixedTop
}
