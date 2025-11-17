// Reusable Card component - demonstrates composition and children prop
// Perfect example of how components can wrap other content
// Note: React import not needed in newer React versions, but included for learning
import React from 'react';

function Card({ 
  title,        // Optional title for the card
  children,     // Content that goes inside the card
  style = {},   // Additional custom styles
  className = '' // Additional CSS classes
}) {
  
  // Default card styles
  const cardStyle = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '20px',
    transition: 'all 0.3s ease',
    ...style  // Merge with any custom styles passed in
  };

  return (
    <div 
      className={`card ${className}`}
      style={cardStyle}
    >
      {/* Conditionally render title if provided */}
      {title && (
        <h2 style={{
          marginTop: 0,
          marginBottom: '15px',
          color: 'var(--text-primary)'
        }}>
          {title}
        </h2>
      )}
      
      {/* Render whatever content is passed as children */}
      {children}
    </div>
  );
}

export default Card;