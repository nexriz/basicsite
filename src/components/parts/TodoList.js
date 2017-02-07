import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, changeText, removeTodo } from '../../actions/todoActions';

@connect((store) => {
  return {
    todos: store.todos.todoList,
  };
})
export default class TodoList extends React.Component {
  addTodo = (e) => {
    console.log(this.children)
    e.preventDefault();
    const { todoVal } = this.refs;
    const { dispatch } = this.props;
    if( todoVal.value == '') return;
    dispatch(addTodo(todoVal.value))
    todoVal.value = '';
  }
  onChange = (e) => {

  }
  removeItem = (text, date) => {
    const { dispatch } = this.props;
    dispatch(removeTodo(text, date));

  }
  render() {
  	const { todos } = this.props;
    return (
      <div>
      	<form onSubmit={this.addTodo}>
      		<input 
           type="text"
           ref="todoVal" />

           <button><i className="fa fa-plus" aria-hidden="true"/></button>
      		<br />
      		<List todos={todos} removeItem={this.removeItem}/>
     	</form>
      </div>

    );
  }
}

const List = ({todos, removeItem}) => (
	<ul className="w3-ul w3-hoverable">
    {todos.map((item, index) => (<li key={index} onClick={() => removeItem(item.text, item.date)}>{item.text} </li>))}
	</ul>
)