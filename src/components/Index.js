import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Immutable from 'immutable';

import TodoList from './parts/TodoList';


@connect(store => {
  return {
    todos: store.todos.todoList,
    text: store.todos.text
  }
})
export default class Index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      val: 'X',
      isToggle: true,
      array: [null, null, null,
              null, null, null,
              null, null, null]
    }
    axios.get('https://jsonplaceholder.typicode.com/posts').then(data => this.setState({ data: data.data}));

    const test = Immutable.List.of(1, 2, 3, 4)
    console.log(test)
    const newTest = test.push(1);
    console.log(newTest.toJS(), test.toJS())
  }

  axiosCall() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  }

  startClick() {
    this.setState({
      count: this.state.count + 1,
      val: this.state.count % 2 === 0 ? 'X' : 'O',
    })
  }
  newStart() {
    this.setState(prev => ({
      isToggle: !prev.isToggle,
    }))
  }
  addTik(i, e) {
    const { array, isToggle } = this.state;
    const myTurn = isToggle ? 'X' : 'O';
    const newArr = array;
    newArr.splice(i, 1, myTurn );
    console.log(i, newArr)
    this.setState({
      array: newArr
    })
    this.newStart();
  }

  render() {
    const { todos, text } = this.props;
    const { val, count, isToggle, data, array } = this.state;

    const para = count % 2 == 0 ? 'X' : 'O';

    return (
      <div className="index-container">


        <h1>{'<- Home Page ->'}</h1>


        <div className="container-tik">
          {array.map((item, index) => (
              <div className="item-tik" key={index} onClick={(e) => this.addTik(index, e)}>{item}</div>
            ))}
        </div>




        <div>
        <table style={{ width: '100%', border: '1px solid black', overflow: 'auto'}}>
        <thead >
          <tr style={{ width: '50%', border: '1px solid black', overflow: 'auto'}}>
            <th>Id</th>
            <th>User</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          </thead>
          <tbody>
            { data && data.map((item, index) => (
              <tr key={index} style={{ width: '50%', border: '1px solid black', overflow: 'auto'}}>
                <td key={index}>{item.id}</td>
                <td key={index + 1}>{item.userId}</td>
                <td key={index + 2}>{item.title}</td>
                <td key={index + 3}>{item.body}</td>
              </tr>)) }
            </tbody>
        </table>
                
          <Lister {...this.props} />
        </div>

      </div>
    );
  }
}


const Lister = ({todos, text}) => (
  <ul>
    {todos.map((item, index) => (
      <li key={index} >{item.text}</li>))}
  </ul>
);