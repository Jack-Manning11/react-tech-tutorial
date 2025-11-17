// Main App component - this is the top-level component that contains everything
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ThemeSwitcher from './components/ThemeSwitcher.js';
import Home from './pages/Home.js';
import Components from './pages/Components.js';
import Interactivity from './pages/Interactivity.js';
import About from './pages/About.js';
import './styles/App.css';

// This is a functional component - the most common way to write React components
function App() {
  // JSX (JavaScript XML) lets us write HTML-like syntax in JavaScript
  // Everything inside the return statement becomes the UI
  return (
    <Router>
      <div className="app">
        {/* Theme switcher - floats in top right corner */}
        <ThemeSwitcher />
        
        {/* Header component appears on every page */}
        <Header />
        
        <main className="main-content">
          {/* Routes define which component to show based on the URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/interactivity" element={<Interactivity />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        {/* Footer component appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

// Export the component so other files can import it
export default App;