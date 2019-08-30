import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const {todos,myToggle,myRemove} = this.props;
        return (
            <div>
                <TodoItem text="리액트" checked={false}/>
                <TodoItem text="앵귤러"checked={true} />
                <TodoItem text="엠버" checked={true}/>
            </div>
        );
    }
}

export default TodoItemList;