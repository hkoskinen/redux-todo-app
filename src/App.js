import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItems from './components/TodoItems';
import AddTodoItem from './components/AddTodoItem';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <TodoItems />
        <AddTodoItem />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

// connect our App component into the redux store
export default connect(mapStateToProps)(App);
