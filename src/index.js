import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Hello, World!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
