import React, { Component }from "react";

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-count form-control" 
                       onChange={this.onLabelChange}
                       placeholder="One more task to be done" />
                <button 
                className="btn btn-outline-secondary add-btn" >
                Add task
                </button>
            </form>
        );
    }
}