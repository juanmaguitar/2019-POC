import React, { Component } from 'react'
import './index.scss'

import { Sticky, ExampleStuckContent, PlaceholderP } from 'components'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App__title">React sticky header</div>
        <PlaceholderP style={{ height: '100vh' }}>
          This content should scroll normally
        </PlaceholderP>
        <Sticky>
          <ExampleStuckContent>
            <p>
              This is a stickable component. It will get a prop called
              "modifiers" containing an array of strings like "stuck-top" when
              it's been scrolled out of view.
            </p>
          </ExampleStuckContent>
        </Sticky>
        <PlaceholderP style={{ height: '100vh' }} />
        <Sticky sides={{ bottom: 0 }}>
          <ExampleStuckContent>
            <p>
              This component sticks to the bottom. It will get a prop called
              "modifiers" containing an array of strings like "stuck-top" when
              it's been scrolled out of view.
            </p>
          </ExampleStuckContent>
        </Sticky>
        <PlaceholderP style={{ height: '100vh' }} />
      </div>
    )
  }
}

export default App
