import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
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

// props의 type을 정할때 사용한다.
MyComponent.propTypes = {
    name: PropTypes.string // name props 타입을 문자열로 설정함
}

export default MyComponent;