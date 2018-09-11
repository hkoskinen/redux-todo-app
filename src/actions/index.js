export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const DONE_TODO_ITEM = 'DONE_TODO_ITEM';

// action creators
export const addTodoItem = item => {
  return {
    type: ADD_TODO_ITEM,
    item
  };
};

export const removeTodoItem = item => {
  return {
    type: REMOVE_TODO_ITEM,
    item
  };
};

const doneTodoItem = item => {
  return {
    type: DONE_TODO_ITEM,
    item
  };
};
