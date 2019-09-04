import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends Component {
  sayHey() {
    console.log('hey');
  }
  render() {
    return (
      <MyComponent />
    );
  }
}

export default App;
