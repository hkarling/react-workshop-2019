import React, { Component } from 'react';
import './App.css';

class App extends Component {
  sayHey() {
    console.log('hey');
  }
  render() {
    return (
      <React.Fragment>
        {
          1 + 1 === 3 ? (<div>맞음</div>) : (<div>틀림</div>)
        }
        {
          1 + 1 === 2 && (<div>맞음</div>) // 이러면 조건식이 true일때만 보여준다.
        }
      </React.Fragment>
    );
  }
}

export default App;
