export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const DONE_TODO_ITEM = 'DONE_TODO_ITEM';
export const CHANGE_TODO_ITEM_DONE = 'CHANGE_TODO_ITEM_DONE';

// action creators
export const addTodoItem = item => {
  return {
    type: ADD_TODO_ITEM,
    item
  };
};

export const removeTodoItem = id => {
  return {
    type: REMOVE_TODO_ITEM,
    id: id.id
  };
};

export const changeTodoItemDone = id => {
  return {
    type: CHANGE_TODO_ITEM_DONE,
    id: id.id
  };
};
