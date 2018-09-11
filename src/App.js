import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoItem, removeTodoItem } from './actions';
import uuid from 'uuid';

class App extends Component {
  render() {
    const { title, todos } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div>
          { todos && todos.length > 0 ? (
            <ul>
              { todos.map(todo => (
                <li key={todo.id}>
                  {todo.text} <button onClick={() => this.props.onDeleteItem(todo)}>remove</button>
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

      const item = { id: uuid(), text:e.target.item.value.trim() };
      dispatch(addTodoItem(item));

      e.target.item.value = '';
    },
    onDeleteItem: todo => {
      dispatch(removeTodoItem(todo));
    }
  }
};

// connect our App component into the redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
