import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
          <div className="register col-3">
            <p className="registerAccount">Don't have an account?</p>
            <Link to={'/'} className="signUpLink">
              Sign Up
            </Link>
          </div>
        </section>  
    )
  }
}
