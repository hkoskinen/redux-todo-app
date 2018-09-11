import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions';
import TodoItem from './TodoItem';

const TodoItems = ({todos, onRemoveItem}) => {
  return (
    <div>
      {
        todos && todos.length > 0
        ? ( todos.map(todo => <TodoItem key={todo.id} {...todo} onRemoveItem={onRemoveItem} />) )
        : <p>You do not have any items on your list.</p>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: id => dispatch(removeTodoItem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
