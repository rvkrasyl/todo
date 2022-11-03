import React, { Component } from "react";

import './TodoListItem.css';

export default class TodoListItem extends Component {
    render() {
    
        const style = {
            color: this.props.important ? 'steelblue' : 'black',
            fontWeight: this.props.important ? 'bold' : 'normal',
        } 
        
        return (
            <span className="todo-list-item">
                <span 
                    className="todo-list-item-label" 
                    style={style}>
                    { this.props.label }
                </span>
    
                <button type="button"
                        className="btn btn-putline-success btn-sm">
                    <i className="fa fa-exclamation"/>
                </button>
    
    
                <button type="button"
                        className="btn btn-putline-success btn-sm">
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        );
    }
}