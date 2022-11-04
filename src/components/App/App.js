import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

class App extends Component {
    render() {

        const todoData = [
            { id: 1, label: "Drink Coffee", important: false, },
            { id: 2, label: "Create awesome React App", important: true, },
            { id: 3, label: "Have a lunch", important: false, }
        ];
    
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                todos={ todoData } 
                onDeleted={ (id) => console.log(`${id} deleted`)}
                />
            </div>
        );
    };
}

export default App;