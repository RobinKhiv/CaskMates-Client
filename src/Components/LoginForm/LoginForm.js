import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import TokenService from '../../Services/token-api-service';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
 
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const {error} = this.state;
    return (
      <form className='loginForm col-3' onSubmit={this.handleSubmitJwtAuth}>
        <h2>Login</h2>
        <div className='userName-container'>
          <label htmlFor='user_name'>User Name</label><br/>
          <input type='text' name='user_name' className='login-username' placeholder='demouser'/><br/>
        </div>
        <div className='password-container'>
          <label htmlFor='password'>Password</label><br/>
          <input type='password' name='password' className='loginFormPassword' placeholder='password'/><br/>
        </div>
        <input type='submit' name='submit' value='Log In' className='loginSubmit'/>
        <div role='alert row'>
         {error && <p className='red'>{error}</p>}
        </div>
      </form>
    )
  }
}
