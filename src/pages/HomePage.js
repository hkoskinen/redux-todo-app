import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Menu,
  Container,
  Divider,
  List
} from 'semantic-ui-react';

const HomePage = (props) => {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>remember</Menu.Item>
          <Menu.Item as='a'>home</Menu.Item>
        </Container>
      </Menu>

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

      <Divider  section />

      <Container textAlign='center'>
        <List horizontal divided link>
          <List.Item as='a' href="#">site map</List.Item>
          <List.Item as='a' href="#">contact us</List.Item>
          <List.Item as='a' href="#">terms and conditions</List.Item>
          <List.Item as='a' href="#">privacy policy</List.Item>
        </List>
      </Container>
    </div>
  );
};

export default HomePage;
