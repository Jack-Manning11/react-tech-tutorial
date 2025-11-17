// About page - simple page to demonstrate React Router navigation
// Shows how ALL pages use our reusable components for consistency
import React from 'react';
import Card from '../components/Card.js';
import Button from '../components/Button.js';

function About() {
  return (
    <div>
      <h1 className="section-title">About This Tutorial</h1>
      
      <div className="cheat-sheet-grid">
        {/* Using our Card component for every section */}
        <Card title="Purpose">
          <p>
            This tutorial is designed for <strong>absolute beginners</strong> who want to learn React.
            We focus on:
          </p>
          <ul style={{paddingLeft: '20px', marginTop: '15px'}}>
            <li>Raw, uncommented React code</li>
            <li>Heavy commenting to explain everything</li>
            <li>Real examples you can run locally</li>
            <li>Cheat sheet style reference</li>
          </ul>
        </Card>

        <Card title="What You'll Learn">
          <ul style={{paddingLeft: '20px'}}>
            <li>✅ What React is and why it's useful</li>
            <li>✅ How to create and use components</li>
            <li>✅ React Router for multi-page apps</li>
            <li>✅ State management with useState</li>
            <li>✅ Side effects with useEffect</li>
            <li>✅ Event handling and user interaction</li>
          </ul>
        </Card>

        <Card title="Technologies Used">
          <div className="code-block">
{`// package.json dependencies
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0", 
  "react-router-dom": "^7.9.6"
}

// Build tools
"webpack": "^5.102.1",
"babel": "^7.28.5"`}
          </div>
          <p>We keep it simple with minimal dependencies!</p>
        </Card>

        <Card title="Running Locally">
          <div className="code-block">
{`# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build`}
          </div>
          <p>
            The development server runs on <code>http://localhost:3000</code> 
            with hot reloading enabled.
          </p>
        </Card>

        <Card title="Next Steps">
          <p>After completing this tutorial, consider:</p>
          <ul style={{paddingLeft: '20px'}}>
            <li>Building a personal project</li>
            <li>Learning Next.js for production apps</li>
            <li>Exploring state management (Redux, Zustand)</li>
            <li>Adding TypeScript for better code quality</li>
            <li>Learning testing with Jest and React Testing Library</li>
          </ul>
        </Card>

        <Card title="Resources">
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Official Docs:</strong> react.dev</li>
            <li><strong>Interactive Tutorial:</strong> React Tutorial on react.dev</li>
            <li><strong>Practice:</strong> Build small projects</li>
            <li><strong>Community:</strong> Reddit r/reactjs, Discord servers</li>
          </ul>
          <div style={{marginTop: '20px'}}>
            {/* Using our Button component for navigation */}
            <Button 
              onClick={() => window.location.href = '/interactivity'}
              variant="primary"
            >
              Try Interactive Examples →
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;