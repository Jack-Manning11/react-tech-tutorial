// Header component - appears at the top of every page
// This demonstrates how to create a reusable component with navigation
import React from 'react';
import { Link } from 'react-router-dom';

// Functional component with no state - just returns JSX
function Header() {
  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo/Title */}
        <h1 style={logoStyles}>
          <Link to="/" style={logoLinkStyles}>
            React Tutorial
          </Link>
        </h1>
        
        {/* Navigation menu */}
        <nav>
          <ul style={navListStyles}>
            <li style={navItemStyles}>
              <Link to="/" style={navLinkStyles}>
                Home
              </Link>
            </li>
            <li style={navItemStyles}>
              <Link to="/components" style={navLinkStyles}>
                Components
              </Link>
            </li>
            <li style={navItemStyles}>
              <Link to="/interactivity" style={navLinkStyles}>
                Interactivity
              </Link>
            </li>
            <li style={navItemStyles}>
              <Link to="/about" style={navLinkStyles}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Inline styles (you could also use CSS classes)
// This shows how styles work in React components
const headerStyles = {
  background: 'var(--bg-secondary)',
  borderBottom: '1px solid var(--border-color)',
  padding: '1rem 0'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyles = {
  margin: 0,
  fontSize: '1.5rem'
};

const logoLinkStyles = {
  color: 'var(--accent-color)',
  textDecoration: 'none'
};

const navListStyles = {
  listStyle: 'none',
  display: 'flex',
  gap: '2rem',
  margin: 0,
  padding: 0
};

const navItemStyles = {
  // No styles needed for li elements in this case
};

const navLinkStyles = {
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease'
};

// Always export your component so other files can use it
export default Header;