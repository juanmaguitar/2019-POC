import React, { Component } from 'react'
import './index.scss'

import { Sticky } from 'components'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App__title">React sticky header</div>
        <p style={{ height: '100vh', backgroundColor: 'pink', padding: '20px' }}>
          This content should scroll normally
        </p>
        <Sticky>
          <div>
            <p>
              This is a stickable component. It will get a prop called
              "modifiers" containing an array of strings like "stuck-top" when
              it's been scrolled out of view.
            </p>
          </div>
          {
            /*
            <ExampleStuckContent>
          </ExampleStuckContent>
            */
          }
          
        </Sticky>
        <p style={{ height: '100vh', backgroundColor: 'pink', padding: '20px' }}>
          Some more content over here...
        </p>
        <Sticky sides={{ bottom: 0 }}>
          <div>
            <p>
              This component sticks to the bottom. It will get a prop called
              "modifiers" containing an array of strings like "stuck-top" when
              it's been scrolled out of view.
            </p>
          </div>
        </Sticky>
        <p style={{ height: '100vh', backgroundColor: 'pink', padding: '20px' }}>
          Last text
        </p>
      </div>
    )
  }
}

export default App
