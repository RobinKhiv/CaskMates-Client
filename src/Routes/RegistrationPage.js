import React from 'react'
import RegistrationForm from '../Components/RegistrationForm/Registration'

const registrationPage = props => {
  const handleRegistrationSuccuess = () => {
    props.history.push('/login');
  }
  return (
    <section className="registrationPage row">
     <RegistrationForm 
       onRegistrationSuccess={
        handleRegistrationSuccuess
       }
     />
    </section>
  )
}

export default registrationPage;
