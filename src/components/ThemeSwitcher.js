// Theme switcher component - demonstrates useState and localStorage
// This shows how to manage state and persist data between sessions
import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  // useState hook manages component state
  // useState returns [currentValue, setterFunction]
  const [theme, setTheme] = useState('light');

  // useEffect hook runs side effects (like reading from localStorage)
  // The empty array [] means this only runs once when component mounts
  useEffect(() => {
    // Check if user had a theme preference saved in browser storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []); // Empty dependency array = run once on mount

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // Calculate the new theme (opposite of current)
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update component state
    setTheme(newTheme);
    
    // Update the HTML data-theme attribute (for CSS variables)
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage so it persists between browser sessions
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-switcher">
      <button 
        onClick={toggleTheme}
        className="btn btn-secondary"
        style={buttonStyles}
        // Show current theme and what clicking will do
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {/* Conditional rendering based on current theme */}
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}

// Inline styles for the button
const buttonStyles = {
  padding: '8px 16px',
  fontSize: '14px',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease'
};

export default ThemeSwitcher;