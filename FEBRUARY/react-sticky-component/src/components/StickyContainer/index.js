import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-BehaviorSticky'

class StickyContainer extends Component {
  static baseClass = 'tk-sticky'

  state = {
    height: 0,
    width: 0,
    stuckBottom: false,
    stuckTop: false
  }

  componentDidMount () {
    this.addEvents()
    this.handleScroll()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.scrollTarget !== this.props.scrollTarget) {
      this.removeEvents()
      this.addEvents()
    }
  }

  componentWillUnmount () {
    this.removeEvents()
  }

  frameId = 0

  stickyDiv = React.createRef()

  handleScroll = () => {
    const { sides } = this.props
    const stickyDiv = this.stickyDiv.current || null
    const scrollTarget = this.props.scrollTarget || window

    this.frameId = 0

    if (!stickyDiv) {
      return
    }

    let scrollRect = {
      // scrollTarget is the window
      height: scrollTarget.innerHeight,
      width: scrollTarget.innerWidth,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      x: scrollTarget.scrollX,
      y: scrollTarget.scrollY
    }

    if (scrollTarget.getBoundingClientRect) {
      // scrollTarget is not the window
      scrollRect = scrollTarget.getBoundingClientRect()
    }

    let stickyRect = stickyDiv.getBoundingClientRect()

    if (!this.state.height || !this.state.width) {
      this.setState({
        height: stickyRect.height,
        width: stickyRect.height
      })
    }

    stickyRect = {
      // Apparently you can't spread the results of a bounding client rectangle
      height: this.state.height || stickyRect.height,
      width: this.state.width || stickyRect.width,
      x: stickyRect.x,
      y: stickyRect.y
    }

    if (typeof sides.bottom === 'number') {
      if (
        stickyRect.y + stickyRect.height >
        scrollRect.height + scrollRect.top - sides.bottom
      ) {
        this.setState({ stuckBottom: true, stuckMode: true })
      } else {
        this.setState({ stuckBottom: false })
      }
    }

    if (typeof sides.top === 'number') {
      if (stickyRect.y < scrollRect.top + sides.top) {
        this.setState({ stuckTop: true, stuckMode: true })
      } else this.setState({ stuckTop: false })
    }
  }

  debouncedScroll = () => {
    if (!this.frameId) {
      const frameId = window.requestAnimationFrame(this.handleScroll)
      this.frameId = frameId
    }
  }

  addEvents () {
    const { scrollTarget = window } = this.props

    if (scrollTarget && this.stickyDiv.current) {
      scrollTarget.addEventListener('scroll', this.debouncedScroll)
    }
  }

  removeEvents () {
    const { scrollTarget = window } = this.props

    if (scrollTarget) {
      scrollTarget.removeEventListener('scroll', this.debouncedScroll)
    }

    if (this.frameId) {
      window.cancelAnimationFrame(this.frameId)
    }
  }

  render () {
    const { children } = this.props
    const { stuckBottom, stuckTop } = this.state

    const stickyModifiers = []

    if (stuckBottom) stickyModifiers.push('stuck-bottom')
    if (stuckTop) stickyModifiers.push('stuck-top')

    // if (stuckLeft) {
    //   stickyModifiers.push('stuck-left')
    // }

    // if (stuckRight) {
    //   stickyModifiers.push('stuck-right')
    // }

    const childrenWithStuckProps = React.Children.map(children, child => {
      const childModifiers = (child.props && child.props.modifiers) || []
      return React.cloneElement(child, {
        modifiers: [...childModifiers, ...stickyModifiers]
      })
    })

    return (
      <div className={StickyContainer.baseClass} ref={this.stickyDiv}>
        {childrenWithStuckProps}
      </div>
    )
  }
}

StickyContainer.propTypes = {
  /** Pass in a React component, and it will receive `stuckBottom`, `stuckLeft`, `stuckRight`, and/or `stuckTop` modifiers */
  children: PropTypes.node.isRequired,

  /** If you have an internally scrolling component, pass its ref callback to watch for scroll events */
  scrollTarget: PropTypes.object,

  /** These offsets determine how far from the edge of the page an element must be to count as 'stuck' */
  sides: PropTypes.shape({
    bottom: PropTypes.number,
    top: PropTypes.number
  })
}

StickyContainer.defaultProps = {
  scrollTarget: null,
  sides: {
    top: 0
  }
}

export default StickyContainer
