import React from "react";

import TodoListItem from './TodoListItem';

const TodoList = ( props ) => {

    const elements = props.todos.map((todo) => {
        return (
            <li>
                <TodoListItem { ...todo } />
            </li>
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;