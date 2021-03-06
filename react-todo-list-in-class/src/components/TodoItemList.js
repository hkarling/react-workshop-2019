import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos; 
    }

    render() {
        const {todos,myToggle,myRemove} = this.props;
        const todoList = todos.map(
            ({id,text,checked}) => (
                <TodoItem id={id} text={text} checked={checked} myToggle={myToggle} myRemove={myRemove} key={id} />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;