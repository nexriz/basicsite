import React from 'react';
import { connect } from 'react-redux';



export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  submit(e) {
  	e.preventDefault();
    const user = {
      ...this.state,
    }
    console.log(user);
  }
  onChangeName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePass(e) {
    this.setState({
      password: e.target.value,
    });
  }
  
  render() {
    const { username, password } = this.state;
    return (
     <div className="form-size">
      <form onSubmit={(e) => this.submit(e)}>
        <h2>Please sign in</h2>
        <input type="text" 
                onChange={(e) => this.onChangeName(e)} 
                value={username} 
                placeholder="username" 
                required="" 
                autoFocus="" />
        <br />
        <input type="password" 
                onChange={(e) => this.onChangePass(e)}
                value={password}
                placeholder="Password" 
                required="" />
        <br />
        <button type="submit">Sign in</button>
     </form>
    </div>
    );
  }
}



