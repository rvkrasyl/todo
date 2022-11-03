import React from "react";

import TodoListItem from './TodoListItem';

const TodoList = ( props ) => {

    const elements = props.todos.map((todo) => {

        const { id, ...itemProps } = todo;

        return (
            <li key={id}>
                <TodoListItem { ...itemProps } />
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