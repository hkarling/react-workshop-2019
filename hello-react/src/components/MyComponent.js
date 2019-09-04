import React, { Component } from 'react';

class MyComponent extends Component {
    render() { 
        return ( // props로 넘어오는 값을 받는다.
            <div> 
                안녕하슈, 제 이름은 <b>{this.props.name}</b>입니다. 
            </div>
        );
    }
}

export default MyComponent;