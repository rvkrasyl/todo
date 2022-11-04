import React from "react";

import './SearchPanel.css';

const SearchPanel = ( props ) => {
    return (
        <input type='text' 
            className="form-control search-input" 
            placeholder='Search...'
            onChange={props.searchTasks} />
    );
};

export default SearchPanel;