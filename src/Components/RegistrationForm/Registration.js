import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service';

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
    return (
      <form className="registration-form" onSubmit={this.handleRegistrationSubmit}>
        <label htmlFor="user_name">Username : </label>
        <input type="text" name="user_name" className="user_name" required/>
        <label htmlFor="full_name">Full Name : </label>
        <input type="text" name="full_name" className="full_name" required/>
        <label htmlFor="nickname">Nickname : </label>
        <input type="text" name="nickname" className="nickname"/>
        <label htmlFor="password">password : </label>
        <input type="text" name="password" className="password" required/>
        <input type="submit" name="submit" value="submit"/>
      </form>
    )
  }
}
