import React from 'react';

const TodoItem = ({id, text, onRemoveItem}) => (
  <div>
    {text}
    <button onClick={() => onRemoveItem({ id })}>remove</button>
  </div>
);

export default TodoItem;
