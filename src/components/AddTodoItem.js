import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addTodoItem } from '../actions';

const AddTodoItem = (props) => {
  return (
    <div>
      <form onSubmit={props.onAddItem}>
        <input type="text" name="item" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: e => {
      e.preventDefault();

      const item = { id: uuid(), text: e.target.item.value.trim(), done: false };
      dispatch(addTodoItem(item));

      e.target.item.value = '';
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodoItem);
