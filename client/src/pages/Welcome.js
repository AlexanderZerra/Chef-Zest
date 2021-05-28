import { Component } from 'react'
import React from 'react'

class Welcome extends Component {
  render() {
    return (
      <div className="home">
        <body>
          <img
            style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          />
        </body>

        <h1 className="welcome">Welcome</h1>
        <p>
          Everyone craves something. Let that be sweet, sour, furity, warm, or
          cold. The recipes that have been uploaded here will hopefully quench a
          craving you have{' '}
        </p>
      </div>
    )
  }
}
export default Welcome
