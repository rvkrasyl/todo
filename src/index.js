import React from 'react';
import { createRoot } from 'react-dom/client'

const elem = <h1>Hello React</h1>

createRoot(document.querySelector('#root')).render(elem);