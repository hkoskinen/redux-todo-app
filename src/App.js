import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from './actions';

class App extends Component {
  render() {
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
        <div>
          <form onSubmit={this.props.onAddItem}>
              <input type="text" name="item" />
              <button type="submit">add</button>
          </form>
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
  return {
    onAddItem: e => {
      e.preventDefault();

      const item = e.target.item.value.trim();
      dispatch(addTodoItem(item));

      e.target.item.value = '';
    }
  }
};

// connect our App component into the redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
