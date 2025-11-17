// Components page - shows examples of reusable React components
// Notice how we import and USE our custom components!
import React from 'react';
import Card from '../components/Card.js';
import Button from '../components/Button.js';

function Components() {
  return (
    <div>
      <h1 className="section-title">React Components</h1>
      
      {/* Example of using our Card component - see how clean this looks! */}
      <Card title="What are Components?" style={{marginBottom: '30px'}}>
        <p>
          Components are <strong>reusable pieces of UI</strong>. Think of them like LEGO blocks - 
          you can combine them to build complex interfaces. They encapsulate both logic and presentation.
        </p>
        <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
          <li><strong>Encapsulation:</strong> Each component manages its own state and logic</li>
          <li><strong>Reusability:</strong> Write once, use everywhere</li>
          <li><strong>Composability:</strong> Combine small components into larger ones</li>
          <li><strong>Testability:</strong> Isolated units that are easy to test</li>
        </ul>
      </Card>

      <div className="cheat-sheet-grid">
        {/* All these cards use our reusable Card component */}
        <Card title="JSX vs TSX vs JavaScript">
          <p><strong>File Extensions Matter:</strong></p>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>.js</strong> - Regular JavaScript files</li>
            <li><strong>.jsx</strong> - JavaScript with JSX syntax (React elements)</li>
            <li><strong>.ts</strong> - TypeScript files</li>
            <li><strong>.tsx</strong> - TypeScript with JSX syntax</li>
          </ul>
          <p style={{marginTop: '15px'}}>
            <strong>JSX</strong> is a syntax extension that lets you write HTML-like code in JavaScript. 
            <strong>TypeScript</strong> adds static type checking to catch errors at compile time.
          </p>
          <p style={{marginTop: '10px'}}>
            Modern React projects often use <strong>.tsx</strong> files for better type safety and developer experience.
          </p>
        </Card>

        <Card title="TypeScript Integration">
          <p><strong>Why TypeScript with React?</strong></p>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Type Safety:</strong> Catch errors before runtime</li>
            <li><strong>IntelliSense:</strong> Better autocomplete and documentation</li>
            <li><strong>Refactoring:</strong> Safer code changes across large codebases</li>
            <li><strong>Team Collaboration:</strong> Self-documenting code with interfaces</li>
          </ul>
          <p style={{marginTop: '15px'}}>
            TypeScript interfaces define the shape of props, making components more predictable and easier to use correctly.
          </p>
          <p style={{marginTop: '10px'}}>
            Modern React development heavily favors TypeScript for its safety and developer experience benefits.
          </p>
        </Card>

        <Card title="Atomic Design Principles">
          <p><strong>Organize components by complexity:</strong></p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            <li><strong>Atoms:</strong> Basic building blocks (Button, Input, Label)</li>
            <li><strong>Molecules:</strong> Simple combinations of atoms (SearchBox, FormField)</li>
            <li><strong>Organisms:</strong> Complex UI sections (Header, ProductList, Footer)</li>
            <li><strong>Templates:</strong> Page-level layouts without specific content</li>
            <li><strong>Pages:</strong> Complete views with real data</li>
          </ul>
          <p>
            This hierarchy helps maintain consistency, improves reusability, and makes your component library scalable.
            Our Button and Card components are examples of <strong>atoms</strong> that can be combined into more complex structures.
          </p>
        </Card>

        <Card title="Component Lifecycle">
          <p><strong>Understanding how components live and die:</strong></p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            <li><strong>Mounting:</strong> Component is created and added to DOM</li>
            <li><strong>Updating:</strong> Component re-renders due to state/props changes</li>
            <li><strong>Unmounting:</strong> Component is removed from DOM</li>
          </ul>
          <p>
            Modern React uses <strong>hooks</strong> instead of lifecycle methods. 
            useEffect handles all lifecycle events with dependency arrays controlling when effects run.
          </p>
          <p style={{marginTop: '10px'}}>
            Understanding lifecycle helps you optimize performance and manage side effects like API calls, timers, and subscriptions.
          </p>
        </Card>

        <Card title="React Hooks Deep Dive">
          <p><strong>Essential hooks for modern React:</strong></p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            <li><strong>useState:</strong> Manage component state</li>
            <li><strong>useEffect:</strong> Handle side effects and lifecycle</li>
            <li><strong>useContext:</strong> Share data without prop drilling</li>
            <li><strong>useReducer:</strong> Complex state logic with actions</li>
            <li><strong>useCallback:</strong> Memoize functions to prevent re-renders</li>
            <li><strong>useMemo:</strong> Memoize expensive calculations</li>
            <li><strong>useRef:</strong> Access DOM elements directly</li>
            <li><strong>Custom hooks:</strong> Extract and reuse stateful logic</li>
          </ul>
          <p>
            Hooks revolutionized React by allowing function components to have state and lifecycle features 
            previously only available in class components.
          </p>
        </Card>

        <Card title="State Management Strategies">
          <p><strong>Choose the right tool for your app's complexity:</strong></p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            <li><strong>Local State (useState):</strong> Component-specific data</li>
            <li><strong>Lifting State Up:</strong> Share state between sibling components</li>
            <li><strong>Context API:</strong> App-wide state without prop drilling</li>
            <li><strong>useReducer:</strong> Complex state with multiple actions</li>
            <li><strong>External Libraries:</strong> Redux, Zustand, Jotai for large apps</li>
          </ul>
          <p>
            <strong>Rule of thumb:</strong> Start with local state, lift up when needed, 
            use Context for theme/auth, consider external libraries for complex global state.
          </p>
          <p style={{marginTop: '10px'}}>
            Most apps can be built with just useState, useEffect, and Context API.
          </p>
        </Card>
        
        {/* Demonstration of our Button component with different variants */}
        <Card title="Live Component Demo">
          <p>Here are our actual Button components in action:</p>
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px'}}>
            <Button variant="primary" onClick={() => alert('Primary button clicked!')}>
              Primary Button
            </Button>
            <Button variant="secondary" onClick={() => alert('Secondary button clicked!')}>
              Secondary Button
            </Button>
            <Button variant="outline" onClick={() => alert('Outline button clicked!')}>
              Outline Button
            </Button>
            <Button disabled onClick={() => alert('This won\'t fire')}>
              Disabled Button
            </Button>
          </div>
          <p style={{marginTop: '15px'}}>
            These buttons demonstrate <strong>component composition</strong> - our Button component 
            accepts different props (variant, disabled, onClick) to create different behaviors 
            while maintaining consistent styling and functionality.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Components;