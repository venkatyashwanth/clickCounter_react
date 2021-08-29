// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="appBackground">
        <div className="content">
          <h1 className="headText">
            The Button has been clicked <br />
            <span className="countNumber">{count}</span> times
          </h1>
          <p className="paraText">Click the button to increase the count!</p>
          <div>
            <button className="btn1" type="button" onClick={this.onIncrement}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
