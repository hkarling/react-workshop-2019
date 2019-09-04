import React, { Component } from 'react';

class MyComponent extends Component {
    // transform-class-properties 문법
    static defaultProps = {
        name: '기본'
    }
    render() {
        return ( // props로 넘어오는 값을 받는다.
            <div>
                안녕하슈, 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        );
    }
}

// defaultProps 기본값 설정
MyComponent.defaultProps = {
    name: '기본이름'
}

export default MyComponent;