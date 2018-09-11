import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  DONE_TODO_ITEM
} from '../actions';


const initialState = {
  title: 'Redux Todo App',
  todos: ['Read more books', 'Get the groceries', 'Write more JavaScript']
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [ ...state.todos, action.item ]
      };

    default:
      return state;

  }
};

export default rootReducer;
