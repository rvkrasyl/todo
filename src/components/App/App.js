import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class App extends Component {
    state = {
        todoData: [
            { id: 1, label: "Drink Coffee", important: false, },
            { id: 2, label: "Create awesome React App", important: true, },
            { id: 3, label: "Have a lunch", important: false, }
        ],
    };

    deleteItem = (id) => {
        this.setState( (state) => {
            const indx = state.todoData.findIndex((el) => el.id === id);

            const newTodoArray = [
                ...state.todoData.slice(0, indx), 
                ...state.todoData.slice(indx+1)
            ];

            return {
                todoData: newTodoArray,
            }
        });
    }

    addItem = (props) => {
        const newTask = { 
            id: new Date().getTime(), 
            label: props.label, 
            important: false, 
        };

        this.setState( (state) => {
            const newTodoArray = [
                ...state.todoData, 
                newTask
            ];

            return {
                todoData: newTodoArray,
            }
        });
    }

    render() {    
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                todos={ this.state.todoData } 
                onDeleted={this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
}