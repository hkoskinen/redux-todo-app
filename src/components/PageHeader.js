import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const PageHeader = () => (
  <div style={{ marginBottom: '4em' }}>
    <Menu fixed='top' inverted size='large'>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header>remember</Menu.Item>

        <Menu.Item as={NavLink} to='/login' position='right'>login</Menu.Item>
        <Menu.Item as={NavLink} to='/register'>register</Menu.Item>
        <Menu.Item as={NavLink} to='/dashboard'>dashboard</Menu.Item>
        <Menu.Item as={NavLink} to='/preferences'>preferences</Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default PageHeader;
