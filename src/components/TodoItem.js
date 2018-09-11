import React from 'react';

const TodoItem = ({id, text, done, setItemDone, onRemoveItem}) => (
  <div className={ done ? 'done' : '' } >
    {text}
    <button onClick={() => setItemDone({ id })}>done</button>
    <button onClick={() => onRemoveItem({ id })}>remove</button>
  </div>
);

export default TodoItem;
