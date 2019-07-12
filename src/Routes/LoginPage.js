import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../Components/LoginForm/LoginForm';
import WhiskeyContext from '../Context/WhiskeyContext';

const loginPage = props => {
  const context = useContext(WhiskeyContext)
  const handleLoginSuccess = () => {
    context.userLogin();
    props.history.push('/whiskeys')
  }
  return (
    <section className="login-container row">
      <LoginForm onLoginSuccess={handleLoginSuccess}/>
      <div className="register col-3">
        <p className="registerAccount">Don't have an account?</p>
        <Link to={'/'} className="signUpLink">
          Sign Up
        </Link>
      </div>
    </section>  
  )
}
export default loginPage;
