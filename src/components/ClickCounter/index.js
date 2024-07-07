// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  incremenetCount = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          the button has been clicked <span className="counter">{count}</span>{' '}
          times.
        </h1>
        <p>Click the button to increase the count!</p>
        <button type="button" onClick={this.incremenetCount} className="btn">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
