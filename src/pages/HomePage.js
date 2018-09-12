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

const HomePage = () => {
  return (
    <div>
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
