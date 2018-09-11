import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);
    const { title, todos } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div>
          { todos && todos.length > 0 ? (
            <ul>
              { todos.map((todo, i) => (
                <li key={i}>
                  {todo}
                </li>))
              }
            </ul>
          ) : <p>You don't have any todo items.</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  // what actions the component can have to change the store aka application state

};

// connect our App component into the redux store
export default connect(mapStateToProps, null)(App);
