
const initialState = {
  title: 'Redux Todo App',
  todos: ['Read more books', 'Get the groceries', 'Write more JavaScript']
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;

  }
};

export default rootReducer;
