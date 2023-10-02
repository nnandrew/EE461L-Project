import React, { useState } from 'react';
import './App.css';

function App() {
  // Define state variables to hold the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define the function to be called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Username:', username);
    console.log('Password:', password);
    // Here you would typically send the username and password to your server for authentication
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update the username state variable when the input changes
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update the password state variable when the input changes
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
