import React, { Component } from "react";

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
    changeSelectedBtn = (event) => {
        document.querySelector(".btn-group.item-status-filter .btn.btn-outline-secondary.btn-info")
            .className="btn btn-outline-secondary";
        event.target.className += " btn-info";
    }
    
    acceptFilter = (event) => {
        this.changeSelectedBtn(event);
        this.props.applyFilter(event);
    }
    
    render() {
        return (
            <div className="btn-group item-status-filter"
                 onClick={this.acceptFilter}>
                <button type="button"
                        className="btn btn-outline-secondary btn-info">
                        All
                </button>
                <button type="button"
                        className="btn btn-outline-secondary">
                        Active
                </button>
                <button type="button"
                        className="btn btn-outline-secondary">
                        Done
                </button>
            </div>
        );
    }
}