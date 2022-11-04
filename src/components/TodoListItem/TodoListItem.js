import React from "react";

import './TodoListItem.css';

const TodoListItem = (props) => {
    
    let classNames = 'todo-list-item';
    if (props.done) {
        classNames += ' done';
    }

    if (props.important) {
        classNames += ' important';
    }
        
    return (
        <span className={classNames}>
            <span 
                className="todo-list-item-label done"
                onClick={ props.onToggleDone } >
                { props.label }
            </span>
    
            <button type="button"
                    className="btn btn-putline-success btn-sm btn-exclamation"
                    onClick={props.onToggleImportant} >
                <i className="fa fa-exclamation"/>
            </button>  
    
            <button type="button"
                    className="btn btn-putline-success btn-sm btn-trash"
                    onClick={props.onDeleted}>
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
}

export default TodoListItem;