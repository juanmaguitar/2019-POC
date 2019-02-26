import React, { Component } from 'react'
import cx from 'classname'
import './index.scss'

import { Sticky, StickyProvider } from '../Sticky/'

import { Header, HeaderFixedTop } from '../Header/'
import { FooterFixedBottom } from '../Footer/'

class App extends Component {
  containerGreen = React.createRef()
  containerRed = React.createRef()
  containerBrown = React.createRef()

  render () {
    return (
      <StickyProvider>
        <div className="App sui-BehaviourSticky-fixed-parent">
          {/* @begin STICKY FIXED HEADER TOP */}
          <HeaderFixedTop
            className="Demo-header"
            style={{ background: 'black' }}
          >
            <h1>Header Fixed Top</h1>
          </HeaderFixedTop>
          {/* @begin STICKY FIXED HEADER TOP */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY  */}
          <Sticky defaultOffsetTop={85}>
            <Header className="Demo-header" style={{ background: 'blue' }}>
              <h1>Header!</h1>
            </Header>
          </Sticky>
          {/* @end STICKY  */}

          <div className="Demo-title">React sticky header</div>
          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY IN CONTAINER */}
          <div ref={this.containerGreen} style={{ height: '500px' }}>
            <Sticky
              container={this.containerGreen}
              defaultOffsetTop={170}
              style={{ zIndex: 50 }}
            >
              {({ isSticky }) => (
                <Header
                  className={cx('Demo-header', { isSticky })}
                  style={{ background: 'green' }}
                >
                  <h1>Header!</h1>
                </Header>
              )}
            </Sticky>
          </div>
          {/* @end STICKY IN CONTAINER  */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY IN CONTAINER */}
          <div ref={this.containerRed} style={{ height: '500px' }}>
            <Sticky
              container={this.containerRed}
              defaultOffsetTop={170}
              style={{ zIndex: 50 }}
            >
              {({ isSticky }) => (
                <Header
                  className={cx('Demo-header', { isSticky })}
                  style={{ background: 'red' }}
                >
                  <h1>Header!</h1>
                </Header>
              )}
            </Sticky>
          </div>
          {/* @end STICKY IN CONTAINER  */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY IN CONTAINER */}
          <div ref={this.containerBrown} style={{ height: '500px' }}>
            <Sticky
              container={this.containerBrown}
              defaultOffsetTop={170}
              style={{ zIndex: 50 }}
            >
              {({ isSticky }) => (
                <Header
                  className={cx('Demo-header', { isSticky })}
                  style={{ background: 'brown' }}
                >
                  <h1>Header!</h1>
                </Header>
              )}
            </Sticky>
          </div>
          {/* @end STICKY IN CONTAINER  */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          <FooterFixedBottom
            className="Demo-header"
            style={{ background: 'black' }}
          >
            <h1>Footer Fixed Botttom</h1>
          </FooterFixedBottom>
        </div>
      </StickyProvider>
    )
  }
}

export default App
