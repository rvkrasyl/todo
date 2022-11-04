import React, { Component } from "react";

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
    changeSelectedBtn = (event) => {
        document.querySelector(".btn-group.item-status-filter .btn.btn-outline-secondary.btn-info")
            .className="btn btn-outline-secondary";
        event.target.className += " btn-info";
    }
    
    showDone = (event) => {
        this.changeSelectedBtn(event);
        this.props.showDone();
    }

    showActive = (event) => {
        this.changeSelectedBtn(event);
        this.props.showActive();
    }

    showAll = (event) => {
        this.changeSelectedBtn(event);
        this.props.showAll();
    }
    
    render() {
        return (
            <div className="btn-group item-status-filter">
                <button type="button"
                        className="btn btn-outline-secondary btn-info"
                        onClick={this.showAll}>
                        All
                </button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={this.showActive}>
                        Active
                </button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={this.showDone}>
                        Done
                </button>
            </div>
        );
    }
}