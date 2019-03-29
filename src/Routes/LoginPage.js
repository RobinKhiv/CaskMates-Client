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
    this.context.userLogin();
    this.props.history.push('/whiskeys')
  }

  render() {
    return (
      <section className="login-container row">
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </section>
    )
  }
}
