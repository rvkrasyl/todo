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
            this.createTodoItem('Drink Coffee', 1),
            this.createTodoItem('Create awesome app', 2),
            this.createTodoItem('Have lunch', 3),
        ],
    };

    createTodoItem(label, id) {
        const newId = id ? id : new Date().getTime();
        return { 
            id: newId, 
            label, 
            important: false, 
            done: false,
        }
    }

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
        const newTask = this.createTodoItem(props.label);

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

    onToggleImportant = (id) => {
        this.setState( (state) => {
            const indx = state.todoData.findIndex((el) => el.id === id);

            const oldItem = state.todoData[indx];
            const newItem = {...oldItem, important: !oldItem.important };

            const newArray = [
                ...state.todoData.slice(0, indx),
                newItem,
                ...state.todoData.slice(indx+1),
            ];

            return {
                todoData: newArray,
            }
        });
    }

    onToggleDone = (id) => {
        this.setState( (state) => {
            const indx = state.todoData.findIndex((el) => el.id === id);

            const oldItem = state.todoData[indx];
            const newItem = {...oldItem, done: !oldItem.done };

            const newArray = [
                ...state.todoData.slice(0, indx),
                newItem,
                ...state.todoData.slice(indx+1),
            ];

            return {
                todoData: newArray,
            }
        });
    }

    render() { 
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        
        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                todos={ this.state.todoData } 
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}