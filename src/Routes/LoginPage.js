import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm/LoginForm';
import WhiskeyContext from '../Context/WhiskeyContext';


export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }
  static contextType = WhiskeyContext;

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    this.context.userLogin();
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
