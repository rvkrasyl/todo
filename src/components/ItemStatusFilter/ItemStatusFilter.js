import React, { Component } from "react";

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: "All" },
        { name: 'active', label: "Active" },
        { name: 'done', label: "Done" },
    ]

    render() {
        
        const { filter, acceptFilter } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? "btn-info" : "";
            return (
                <button type="button"
                        className={`btn btn-outline-secondary ${clazz}`}
                        key={name}>
                        {label}
                </button>
            );
        });

        return (
            <div className="btn-group item-status-filter"
                 onClick={ acceptFilter }>
                { buttons }
            </div>
        );
    }
}