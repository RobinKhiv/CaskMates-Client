import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm/LoginForm';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    console.log("location", location);
    console.log("destination", destination);
    console.log("props", this.props)
    
    const destination = (location.state || {}).from || '/'
    this.props.history.push('/whiskeys')
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </section>
    )
  }
}
