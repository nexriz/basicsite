import React from 'react';

import TodoList from './parts/TodoList';

export default class Create extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index-container">
            <h1>{'<- Create Page ->'}</h1>
            <div className="todolist">
              <h4>Todo List</h4>
              <TodoList />
            </div>
      </div>
    );
  }
}
