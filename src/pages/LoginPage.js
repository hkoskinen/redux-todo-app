import React from 'react';
import axios from 'axios';


class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(process.env);
/*
    axios.post(`${process.env.REACT_APP_REST_API}/register`, {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
*/
axios.get(`${process.env.REACT_APP_REST_API}/dashboard`,  {
      headers: {
        'Authorization': 'Bearer thiswillbereceivedfromtheapi'
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p><label>username:
          <input type="text" name="username"
            value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})} />
        </label></p>
        <p><label>password:
          <input type="password" name="password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})} />
        </label></p>
        <p><button type="submit">Log In</button></p>
      </form>
    );
  }
}

const LoginPage = () => (
  <div>
    <h1>Log In</h1>
    <Login />
  </div>
);

export default LoginPage;
