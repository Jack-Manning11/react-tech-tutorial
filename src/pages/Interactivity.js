// Interactivity page - demonstrates useState and useEffect hooks
// This shows how to add state and side effects to React components
// Notice how we use our reusable components everywhere!
import React, { useState, useEffect } from 'react';
import Card from '../components/Card.js';
import Button from '../components/Button.js';

function Interactivity() {
  // useState examples - managing component state
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  // useEffect examples - handling side effects
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect - runs after component mounts (empty dependency array)
  useEffect(() => {
    console.log('Component mounted!');
    // This runs once when component first loads
  }, []);

  // useEffect - runs when count changes (count in dependency array)
  useEffect(() => {
    document.title = `Count: ${count}`;
    // Update browser tab title when count changes
  }, [count]);

  // Function to fetch sample data (demonstrates async operations)
  const fetchPosts = async () => {
    setLoading(true);
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data instead of real API call
      const mockPosts = [
        { id: 1, title: 'Learning React Hooks', content: 'useState and useEffect are powerful!' },
        { id: 2, title: 'Building Components', content: 'Reusable components make development faster.' },
        { id: 3, title: 'State Management', content: 'Props down, events up!' }
      ];
      
      setPosts(mockPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to add new todo item
  const addTodo = () => {
    if (newTodo.trim()) {
      // Create new todo object
      const todo = {
        id: Date.now(), // Simple ID generation
        text: newTodo,
        completed: false
      };
      
      // Add to todos array (don't mutate original array)
      setTodos([...todos, todo]);
      
      // Clear input
      setNewTodo('');
    }
  };

  // Function to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  // Function to delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1 className="section-title">Interactive React Examples</h1>
      
      <div className="cheat-sheet-grid">
        {/* useState Example - Counter using our Card component */}
        <Card title="useState Hook - Counter">
          <p>State lets components "remember" things between renders.</p>
          
          <p style={{marginTop: '15px'}}>
            <strong>State is reactive</strong> - when state changes, React automatically re-renders 
            the component with the new value. This creates a smooth, interactive user experience.
          </p>
          
          <div style={{textAlign: 'center', margin: '20px 0'}}>
            <h3>Count: {count}</h3>
            {/* Using our Button component instead of regular buttons */}
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Button 
                onClick={() => setCount(count + 1)}
                variant="primary"
              >
                +1
              </Button>
              <Button 
                onClick={() => setCount(count - 1)}
                variant="primary"
              >
                -1
              </Button>
              <Button 
                onClick={() => setCount(0)}
                variant="secondary"
              >
                Reset
              </Button>
            </div>
          </div>
        </Card>

        {/* useState Example - Form Input */}
        <Card title="useState Hook - Form Input">
          <p>Controlled components sync input value with React state.</p>
          
          <p style={{marginTop: '15px'}}>
            <strong>Controlled components</strong> keep form inputs in sync with React state. 
            This gives you full control over the input's value and enables powerful features like validation and formatting.
          </p>
          
          <div style={{margin: '20px 0'}}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: '8px 12px',
                fontSize: '16px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                width: '100%',
                maxWidth: '300px'
              }}
            />
            <p style={{marginTop: '10px'}}>
              {name ? `Hello, ${name}!` : 'Type something above...'}
            </p>
          </div>
        </Card>

        {/* useEffect Example - Side Effects */}
        <Card title="useEffect Hook - Side Effects">
          <p>useEffect runs code after renders (like API calls, timers, etc.).</p>
          
          <p style={{marginTop: '15px'}}>
            <strong>Dependency arrays</strong> control when useEffect runs. Empty array = run once on mount. 
            Including variables = run when those variables change. No array = run on every render.
          </p>
          
          <div style={{margin: '20px 0'}}>
            <p>Check your browser tab title - it updates with the counter!</p>
            <Button 
              onClick={fetchPosts}
              disabled={loading}
              variant="primary"
            >
              {loading ? 'Loading...' : 'Fetch Sample Data'}
            </Button>
          </div>
        </Card>

        {/* Complex State Example - Todo List */}
        <Card title="Complex State - Todo List">
          <p>Managing arrays and objects in state.</p>
          
          <p style={{marginTop: '15px'}}>
            <strong>Immutable updates</strong> are crucial in React. Always create new objects/arrays 
            instead of modifying existing ones. This ensures React detects changes and re-renders properly.
          </p>
          
          <div style={{margin: '20px 0'}}>
            <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
              <input
                type="text"
                placeholder="Add a todo..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                style={{
                  padding: '8px 12px',
                  fontSize: '16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  flex: 1
                }}
              />
              <Button onClick={addTodo} variant="primary">Add</Button>
            </div>
            
            <ul style={{listStyle: 'none', padding: 0}}>
              {todos.map(todo => (
                <li key={todo.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'var(--text-secondary)' : 'var(--text-primary)'
                  }}>
                    {todo.text}
                  </span>
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            
            {todos.length === 0 && (
              <p style={{color: 'var(--text-secondary)', textAlign: 'center', padding: '20px'}}>
                No todos yet. Add one above!
              </p>
            )}
          </div>
        </Card>

        {/* Data Fetching Example using Card component */}
        {posts.length > 0 && (
          <Card title="Fetched Data">
            <p>Example of loading and displaying data with useEffect.</p>
            
            <div style={{margin: '20px 0'}}>
              {posts.map(post => (
                <div key={post.id} style={{
                  padding: '15px',
                  margin: '10px 0',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px'
                }}>
                  <h3 style={{"margin": "0 0 8px 0", "color": "var(--accent-color)"}}>
                    {post.title}
                  </h3>
                  <p style={{"margin": 0, "color": "var(--text-secondary)"}}>
                    {post.content}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Key Concepts */}
        <Card title="Key React Concepts">
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>State is immutable:</strong> Always create new objects/arrays</li>
            <li><strong>useState:</strong> For component state that triggers re-renders</li>
            <li><strong>useEffect:</strong> For side effects (API calls, timers, subscriptions)</li>
            <li><strong>Dependency arrays:</strong> Control when useEffect runs</li>
            <li><strong>Event handlers:</strong> Functions that respond to user actions</li>
            <li><strong>Controlled components:</strong> Input values controlled by React state</li>
          </ul>
          
          <p style={{marginTop: '15px'}}>
            <strong>Performance optimization:</strong> Use useCallback to memoize functions, 
            useMemo for expensive calculations, and React.memo for component memoization. 
            These prevent unnecessary re-renders in larger applications.
          </p>
        </Card>

        {/* Modern React Patterns */}
        <Card title="Modern React Patterns">
          <p><strong>Error Boundaries:</strong></p>
          <p style={{marginBottom: '15px'}}>
            Catch JavaScript errors anywhere in the component tree and display fallback UI instead of crashing the entire app.
          </p>
          
          <p><strong>Suspense & Lazy Loading:</strong></p>
          <p style={{marginBottom: '15px'}}>
            React.lazy() enables code splitting - load components only when needed. Suspense provides loading states for async operations.
          </p>
          
          <p><strong>Custom Hooks:</strong></p>
          <p style={{marginBottom: '15px'}}>
            Extract stateful logic into reusable functions. Great for sharing logic between components without wrapper components or render props.
          </p>
          
          <p><strong>Compound Components:</strong></p>
          <p>
            Build flexible component APIs where multiple components work together (like HTML select/option). 
            Provides great developer experience with clear component relationships.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Interactivity;