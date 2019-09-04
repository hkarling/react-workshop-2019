import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends Component {
  sayHey() {
    console.log('hey');
  }
  render() {
    return (
      <MyComponent name={3} /> // 문자열 이외의 값을 보낼때는 {}로 감싼다.
    );
  }
}

export default App;
