import React, { Component } from "react";

import './TodoListItem.css';

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false,
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !this.state.done,
            };
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !this.state.important,
            };
        });
    };
    
    render() {
        
        let classNames = 'todo-list-item';
        if (this.state.done) {
            classNames += ' done';
        };

        if (this.state.important) {
            classNames += ' important';
        };
        
        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-label done"
                    onClick={ this.onLabelClick } >
                    { this.props.label }
                </span>
    
                <button type="button"
                        className="btn btn-putline-success btn-sm btn-exclamation"
                        onClick={this.onMarkImportant} >
                    <i className="fa fa-exclamation"/>
                </button>  
    
                <button type="button"
                        className="btn btn-putline-success btn-sm btn-trash"
                        onClick={this.props.onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        );
    }
}