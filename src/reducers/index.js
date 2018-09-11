import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  DONE_TODO_ITEM
} from '../actions';
import uuid from 'uuid';

const initialState = {
  title: 'Redux Todo App',
  todos: [
    { id: uuid(), text:'Read more books' },
    { id: uuid(), text:'Get the groceries' },
    { id: uuid(), text:'Write more JavaScript' }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [ ...state.todos, action.item ]
      };

    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.item.id)
      };

    default:
      return state;

  }
};

export default rootReducer;
