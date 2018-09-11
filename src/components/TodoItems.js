import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem, changeTodoItemDone } from '../actions';
import TodoItem from './TodoItem';

const TodoItems = ({todos, onRemoveItem, setItemDone}) => {
  return (
    <div>
      {
        todos && todos.length > 0
        ? ( todos.map(todo => <TodoItem key={todo.id} {...todo} onRemoveItem={onRemoveItem} setItemDone={setItemDone} />) )
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
    onRemoveItem: id => dispatch(removeTodoItem(id)),
    setItemDone: id => dispatch(changeTodoItemDone(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
