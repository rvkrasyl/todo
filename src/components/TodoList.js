import React from "react";

import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ( props ) => {

    const elements = props.todos.map((todo) => {

        const { id, ...itemProps } = todo;

        return (
            <li className="list-group-item" key={id}>
                <TodoListItem { ...itemProps } />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;