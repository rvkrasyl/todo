import React from 'react';
import { createRoot } from 'react-dom/client';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

    const todoData = [
        { label: "Drink Coffee", important: false, },
        { label: "Create awesome React App", important: true, },
        { label: "Have a lunch", important: false, }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={ todoData } />
        </div>
    );
};

createRoot(document.querySelector('#root')).render(<App />);