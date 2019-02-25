import React, { Component } from 'react'
import './index.scss'

import { StickyContainer } from 'react-sticky'

// import { Sticky } from 'components'

import Sticky from '../Sticky/'

const YourComponent = () => (
  <div sytle={{ background: '#FFF' }}>
    <h1>aaa</h1>
  </div>
)

class App extends Component {
  render () {
    return (
      <StickyContainer>
        <div className="App">
          <Sticky enabled={true} top={50} bottomBoundary={1200}>
            <YourComponent />
          </Sticky>
          <div className="App__title">React sticky header</div>
          <p
            style={{
              height: '100vh',
              backgroundColor: 'pink',
              padding: '20px',
              margin: '0'
            }}
          >
            This content should scroll normally
          </p>
          <StickyContainer className="container">
            <Sticky enabled={true} top={50} bottomBoundary={1200}>
              <YourComponent />
            </Sticky>
          </StickyContainer>
          <p
            style={{
              height: '100vh',
              backgroundColor: 'pink',
              padding: '20px'
            }}
          >
            Some more content over here...
          </p>
          <Sticky enabled={true} top={50} bottomBoundary={1200}>
            <YourComponent />
          </Sticky>
          <p
            style={{
              height: '100vh',
              backgroundColor: 'pink',
              padding: '20px'
            }}
          >
            Last text
          </p>
        </div>
      </StickyContainer>
    )
  }
}

export default App
