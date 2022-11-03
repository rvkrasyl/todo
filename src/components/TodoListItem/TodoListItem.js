import React from "react";

import './TodoListItem.css';

const TodoListItem = ( props ) => {
    
    const style = {
        color: props.important ? 'steelblue' : 'black',
        fontWeight: props.important ? 'bold' : 'normal',
    } 
    
    return (
        <span className="todo-list-item">
            <span 
                className="todo-list-item-label" 
                style={style}>
                { props.label }
            </span>

            <button type="button"
                    className="btn btn-putline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>


            <button type="button"
                    className="btn btn-putline-success btn-sm float-right">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
};

export default TodoListItem;