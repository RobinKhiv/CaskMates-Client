import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service';
import './Registration.css';

export default class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  state = { error: null }

  handleRegistrationSubmit = (ev) => {
    ev.preventDefault();
    const {user_name, full_name, nickname, password} = ev.target;
    this.setState({ error: null })
    AuthApiService.postUser({
        user_name: user_name.value,
        full_name: full_name.value,
        nickname: nickname.value,
        password: password.value
    })
    .then(user => {
    full_name.value = ''
    nickname.value = ''
    user_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
    })
    .catch(res => {
        this.setState({error: res.error})
    }) 
  }

  render() {
    const {error} = this.state
    return (
      <form className="registration-form col-12" onSubmit={this.handleRegistrationSubmit}>
        <div role="alert">
          {error && <p className="red">{error}</p>}
        </div>
        <h2 className="register-title">Register</h2>
        <p className='branding-quote'>For us whiskey isn't just a drink, its a passion!</p>
        <input type="text" name="user_name" className="user_name" placeholder="Username" required/><br/>
        <input type="text" name="full_name" className="full_name" placeholder="Full Name" required/><br/>
        <input type="text" name="nickname" className="nickname" placeholder="Nickname"/><br/>
        <input type="text" name="password" className="password" placeholder="Password" required/><br/>
        <input type="submit" name="submit" value="Register"/>
      </form>
    )
  }
}
