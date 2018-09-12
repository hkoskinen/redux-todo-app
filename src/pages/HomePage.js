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
      <Container text textAlign='center'>
        <Header
          as='h1'
          content='Your favorite notebook app'
          style={{
            fontSize: '3em',
            fontWeight: 'normal',
            marginTop:'2em'
          }}
        />
        <Header
          as='h2'
          content='Remember anything, anywhere, anytime.'
          style={{
            fontSize: '1.5em',
            fontWeight: 'normal'
          }}
        />
        <Button primary size='huge'>Sign Up</Button>
      </Container>
    </div>
  );
};

export default HomePage;
