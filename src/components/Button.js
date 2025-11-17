// Reusable Button component - shows how to accept props and handle events
// This is a great example for beginners to understand component composition
import React from 'react';

// Function component that accepts props
// Props are passed down from parent components
function Button({ 
  children,     // Text or elements inside the button
  onClick,      // Function to call when clicked
  variant = 'primary',  // Default variant if none provided
  disabled = false,     // Whether button is disabled
  ...otherProps        // Spread operator for any other props
}) {
  
  // Define different button styles based on variant
  const getButtonStyle = () => {
    const baseStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      opacity: disabled ? 0.6 : 1
    };

    // Different styles for different variants
    const variants = {
      primary: {
        background: 'var(--accent-color)',
        color: 'white'
      },
      secondary: {
        background: 'var(--text-secondary)',
        color: 'white'
      },
      outline: {
        background: 'transparent',
        color: 'var(--accent-color)',
        border: '1px solid var(--accent-color)'
      }
    };

    // Combine base style with variant style
    return { ...baseStyle, ...variants[variant] };
  };

  // Handle click events
  const handleClick = (event) => {
    // Don't do anything if button is disabled
    if (disabled) return;
    
    // Call the onClick function if it exists
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button 
      style={getButtonStyle()}
      onClick={handleClick}
      disabled={disabled}
      {...otherProps}  // Spread any other props like id, className, etc.
    >
      {children}
    </button>
  );
}

export default Button;