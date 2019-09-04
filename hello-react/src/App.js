import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends Component {
  sayHey() {
    console.log('hey');
  }
  render() {
    return (
      <MyComponent name="리엑트" />
    );
  }
}

export default App;
