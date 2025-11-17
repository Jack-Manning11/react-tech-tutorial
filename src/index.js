// This is the entry point of our React application
// React 18+ uses createRoot instead of ReactDOM.render
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

// Get the HTML element with id="root" from public/index.html
const container = document.getElementById('root');

// Create a React root - this is the new way in React 18+
const root = createRoot(container);

// Render our main App component into the root
// StrictMode helps catch common mistakes during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);