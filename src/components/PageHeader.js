import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const PageHeader = () => (
  <div style={{ marginBottom: '4em' }}>
    <Menu fixed='top' inverted size='large'>
      <Container>
        <Menu.Item as='a' header><NavLink to='/'>remember</NavLink></Menu.Item>

        <Menu.Item as='a' position='right'><NavLink to='/login'>login</NavLink></Menu.Item>
        <Menu.Item as='a'><NavLink to='/register'>register</NavLink></Menu.Item>
        <Menu.Item as='a'><NavLink to='/dashboard'>dashboard</NavLink></Menu.Item>
        <Menu.Item as='a'><NavLink to='/preferences'>preferences</NavLink></Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default PageHeader;
