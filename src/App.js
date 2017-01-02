import React from 'react';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({ count: this.state.count + 55 })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment.bind(this)}>
          Click to plus 55
        </button>
      </div>
    )
  }
}


