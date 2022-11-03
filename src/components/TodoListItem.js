import React from "react";

const TodoListItem = ( props ) => {
    
    const style = {
        color: props.important ? 'tomato' : 'black',
    } 
    
    return <span style={style}>{ props.label }</span>
}

export default TodoListItem;