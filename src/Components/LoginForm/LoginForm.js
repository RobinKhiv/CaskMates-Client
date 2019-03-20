import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import TokenService from '../../Services/token-api-service';

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
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const {error} = this.state;
    return (
      <form className='loginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
        {error && <p className='red'>{error}</p>}
        </div>
        <div className='userName'>
          <label htmlFor='user_name'>User Name</label><br/>
          <input type='text' name='user_name' className='login-username'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label><br/>
          <input type='text' name='password' className='loginFormPassword'/>
        </div>
        <input type='submit' name='submit' className='loginSubmit'/>
        <input type='button' name='cancel' className='cancel-bt' value='cancel'/>
      </form>
    )
  }
}
