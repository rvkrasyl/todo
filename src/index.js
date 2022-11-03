import React from 'react';
import { createRoot } from 'react-dom/client';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

createRoot(document.querySelector('#root')).render(<App />);