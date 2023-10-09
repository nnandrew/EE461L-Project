import React, { useState } from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useJwt } from "react-jwt";

function App() {
  // Define state variables to hold the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  // Define the function to be called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Username:', username);
    console.log('Password:', password);
    // Here you would typically send the username and password to your server for authentication
  };

  const { decodedToken, isExpired } = useJwt(token);


  return (
    <GoogleOAuthProvider clientId="612708681336-j44bbu13ctri3t3uc85k5eiok3djbj4b.apps.googleusercontent.com">
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update the username state variable when the input changes
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update the password state variable when the input changes
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            setToken(credentialResponse.credential);
            console.log(decodedToken);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </header>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
