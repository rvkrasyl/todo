import React, { Component } from "react";

import './TodoListItem.css';

export default class TodoListItem extends Component {
    state = {
        done: false,
    };

    onLabelClick = () => {
        this.setState({
            done: !this.state.done,
        });
    };
    
    render() {
        
        let classNames = 'todo-list-item';
        if (this.state.done) {
            classNames += ' done';
        };

        const style = {
            color: this.props.important ? 'steelblue' : 'black',
            fontWeight: this.props.important ? 'bold' : 'normal',
        }; 
        
        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-label"
                    onClick={ this.onLabelClick } 
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