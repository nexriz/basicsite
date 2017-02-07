import React from 'react';

import LoginForm from './parts/LoginForm';


export default class Login extends React.Component {
  render() {
    return (
      <div className="index-container">
      	<h1>{'<- Login Page ->'}</h1>
        <LoginForm />
      </div>
    );
  }
}


