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
        term: '',
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

    addItem = (label) => {
        const newTask = this.createTodoItem(label);
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

    toggleProperty = (id, propName) => {
        this.setState( (state) => {
            const indx = state.todoData.findIndex((el) => el.id === id);

            const oldItem = state.todoData[indx];
            const newItem = {...oldItem, [propName]: !oldItem[propName] };

            const newArr = [
                ...state.todoData.slice(0, indx),
                newItem,
                ...state.todoData.slice(indx+1),
            ];

            return {
                todoData: newArr,
            }
        });   
    }

    onToggleImportant = (id) => {
        this.toggleProperty(id, 'important');
    }

    onToggleDone = (id) => {
        this.toggleProperty(id, 'done');
    }

    filterTasks( items, term ) {
        if(term.length === 0) {
            return items;
        } 

        return items.filter((el) => 
                    el.label.toLowerCase()
                    .indexOf(term.toLowerCase()) !== -1);
    }

    onSearch = ( event ) => {
        this.setState({
            term: event.target.value,
        });
    }

    showActive = () => {
        this.setState( (state) => {
            const newArr = state.todoData
                           .filter((el) => !el.done);
            return {
                todoData: newArr,
            }
        });
    }

    showDone = () => {
        this.setState( (state) => {
            const newArr = state.todoData
                           .filter((el) => el.done);
            return {
                todoData: newArr,
            }
        });
    }

    showAll = () => {
        this.setState( (state) => {
            return {
                todoData: state.todoData,
            }
        });
    }

    render() { 
        const { todoData, term } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filterTasks(todoData, term)
        
        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel searchTasks={this.onSearch} />
                    <ItemStatusFilter 
                    showActive={this.showActive} 
                    showDone={this.showDone}
                    showAll={this.showAll} />
                </div>
                <TodoList 
                todos={ visibleItems } 
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}