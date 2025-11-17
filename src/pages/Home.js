// Home page component - shows overview of React and JavaScript frameworks
// This demonstrates how pages use reusable components for composition
import React from 'react';
import Card from '../components/Card.js';
import Button from '../components/Button.js';

function Home() {
  return (
    <div>
      {/* Page title */}
      <h1 className="section-title">Welcome to React Tutorial</h1>
      
      {/* Introduction section using our reusable Card components */}
      <div className="cheat-sheet-grid">
        
        {/* Each Card component wraps content and provides consistent styling */}
        <Card title="What is React?">
          <p>
            React is a <strong>JavaScript library</strong> for building user interfaces.
            It was created by Facebook and is now maintained by Meta and the community.
          </p>
          <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
            <li>Component-based architecture</li>
            <li>Virtual DOM for efficient updates</li>
            <li>Declarative programming style</li>
            <li>Unidirectional data flow</li>
          </ul>
        </Card>

        <Card title="What is a JavaScript Framework?">
          <p>
            A JavaScript framework (or library) provides:
          </p>
          <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
            <li><strong>Structure:</strong> Organized way to write code</li>
            <li><strong>Tools:</strong> Pre-built functions and components</li>
            <li><strong>Patterns:</strong> Best practices built-in</li>
            <li><strong>Community:</strong> Shared knowledge and resources</li>
          </ul>
          <p style={{marginTop: '15px'}}>
            <strong>Instead of manually manipulating the DOM</strong>, React lets you describe what the UI should look like and handles the updates automatically.
          </p>
        </Card>

        <Card title="Benefits of React">
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Reusable Components:</strong> Write once, use everywhere</li>
            <li><strong>Fast Performance:</strong> Virtual DOM optimizes updates</li>
            <li><strong>Large Ecosystem:</strong> Tons of libraries and tools</li>
            <li><strong>Great Developer Experience:</strong> Hot reloading, debugging tools</li>
            <li><strong>Industry Standard:</strong> Used by Facebook, Netflix, Airbnb</li>
            <li><strong>Job Market:</strong> High demand for React developers</li>
          </ul>
        </Card>

        <Card title="When is React Used?">
          <p><strong>Perfect for:</strong></p>
          <ul style={{paddingLeft: '20px'}}>
            <li>Single Page Applications (SPAs)</li>
            <li>Interactive user interfaces</li>
            <li>Complex web applications</li>
            <li>Mobile apps (React Native)</li>
            <li>Desktop apps (Electron)</li>
          </ul>
          <br />
          <p><strong>Not ideal for:</strong></p>
          <ul style={{paddingLeft: '20px'}}>
            <li>Simple static websites</li>
            <li>Basic blog sites</li>
            <li>SEO-critical content (without SSR)</li>
          </ul>
        </Card>

        <Card title="The MERN Stack">
          <p>
            React is commonly used in the <strong>MERN Stack</strong>:
          </p>
          <div style={{margin: '15px 0'}}>
            <div style={{marginBottom: '10px'}}>
              <strong>M</strong> - <code>MongoDB</code> (Database)
            </div>
            <div style={{marginBottom: '10px'}}>
              <strong>E</strong> - <code>Express.js</code> (Backend Framework)
            </div>
            <div style={{marginBottom: '10px'}}>
              <strong>R</strong> - <code>React</code> (Frontend Library)
            </div>
            <div style={{marginBottom: '10px'}}>
              <strong>N</strong> - <code>Node.js</code> (Runtime Environment)
            </div>
          </div>
          <p>
            This full-stack combination lets you build complete web applications 
            using only JavaScript!
          </p>
        </Card>

        <Card title="Getting Started">
          <p>This tutorial covers:</p>
          <ul style={{paddingLeft: '20px'}}>
            <li>✅ Basic React concepts and components</li>
            <li>✅ React Router for navigation</li>
            <li>✅ State management with useState</li>
            <li>✅ Side effects with useEffect</li>
            <li>✅ Real examples you can run locally</li>
          </ul>
          <div style={{marginTop: '20px'}}>
            {/* Using our custom Button component instead of anchor tag */}
            <Button 
              onClick={() => window.location.href = '/components'}
              variant="primary"
            >
              Explore Components →
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;