import React from "react";

import './AppHeader.css';

const AppHeader = ( props ) => {
    return (
    <div className="app-header d-flex">
        <h1>My ToDo list</h1>
        <h2>{props.toDo} more to do, {props.done} done</h2>
    </div>
    );
};

export default AppHeader;