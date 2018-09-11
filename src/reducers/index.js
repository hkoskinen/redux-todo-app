import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  CHANGE_TODO_ITEM_DONE
} from '../actions';
import uuid from 'uuid';

const initialState = {
  title: 'Redux Todo App',
  todos: [
    { id: uuid(), text:'Read more books', done: false },
    { id: uuid(), text:'Get the groceries', done: false },
    { id: uuid(), text:'Write more JavaScript', done: false }
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
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case CHANGE_TODO_ITEM_DONE:
    console.log(state.todos, action.id);
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };

    default:
      return state;
  }
};

export default rootReducer;
