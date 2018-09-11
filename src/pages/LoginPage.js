import React from 'react';

const LoginPage = () => (
  <div>
    <h1>Log In</h1>
    <form onSubmit={(e) => {e.preventDefault();}}>
      <p><label>username: <input type="text" name="username" /></label></p>
      <p><label>password: <input type="password" name="password" /></label></p>
      <p><button type="submit">Log In</button></p>
    </form>
  </div>
);

export default LoginPage;
