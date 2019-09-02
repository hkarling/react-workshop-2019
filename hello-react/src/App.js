import React, { Component } from 'react';
import './App.css';

class App extends Component {
  sayHey() {
    console.log('hey');
  }
  render() {
    let text = 'Dev-Server'
    return (
      <React.Fragment>
        <h1>Hello React</h1>
        <h1>welcomto {text}</h1>
        <button onClick={this.sayHey}>Click Me</button>
      </React.Fragment>
    );
  }
}

export default App;
