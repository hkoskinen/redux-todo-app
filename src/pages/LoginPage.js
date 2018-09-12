import React from 'react';
import axios from 'axios';
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';

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
      <div>
        <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth: 460 }}>
            <Header size='large'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='username' />
                <Form.Input fluid icon='lock' iconPosition='left' type='password' placeholder='password' />
                <Button color='blue' fluid size='large'>Login</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const LoginPage = () => (<Login />);

export default LoginPage;
