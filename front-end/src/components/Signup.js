import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Signup.css';

function Signup() {
  // Define state variables to hold the user info
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define the function to be called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Username:', username);
    console.log('Password:', password);
    // Here you would typically send the username and password to your server for authentication
  };

  return (
    <div className="Signup">
      <header className="Signup-header">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">Firstname:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} // Update the username state variable when the input changes
            />
          </div>
          <div>
            <label htmlFor="username">Lastname:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)} // Update the username state variable when the input changes
            />
          </div>
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
          <button type="submit">Signup</button>
          <br />
          <Link to="/App">Already have an account? Login here.</Link>
        </form>
      </header>
    </div>
  );
}

export default Signup;
