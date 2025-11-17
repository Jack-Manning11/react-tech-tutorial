// Footer component - appears at the bottom of every page
// Simple component that shows basic JSX structure
import React from 'react';

function Footer() {
  // Get current year for copyright - this shows basic JavaScript in JSX
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <p style={textStyles}>
          © {currentYear} React Tutorial. Built with ❤️ for learning React.
        </p>
        <p style={smallTextStyles}>
          Made for beginners by beginners. Keep it simple!
        </p>
      </div>
    </footer>
  );
}

// Inline styles for the footer
const footerStyles = {
  background: 'var(--bg-secondary)',
  borderTop: '1px solid var(--border-color)',
  padding: '2rem 0',
  marginTop: 'auto', // This pushes footer to bottom
  textAlign: 'center'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const textStyles = {
  color: 'var(--text-secondary)',
  margin: '0 0 0.5rem 0'
};

const smallTextStyles = {
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
  margin: 0
};

export default Footer;