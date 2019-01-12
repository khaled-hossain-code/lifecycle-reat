import React, { Component } from 'react';
import loggify from './loggify';

class App extends Component {
  static defaultProps = {
    workerList: []
  }

  state = {
    newWorker: {}
  }
  render() {
    console.log(this.props.workerList);
    console.log(this.state.newWorker);

    return (
      <div>
        Hello
      </div>
    )
  }
}

App = loggify(App);

export default App;