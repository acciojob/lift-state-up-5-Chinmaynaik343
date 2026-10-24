
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome! You are logged in." : "Please log in"}</h1>
      <LoginForm
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
      />
    </div>
  );
}

function LoginForm({ isLoggedIn, onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  if (isLoggedIn) {
    return <p>Login successful!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input id="username" type="text" required />

      <br /><br />

      <label htmlFor="password">Password: </label>
      <input id="password" type="password" required />

      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default App;
