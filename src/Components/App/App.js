import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../Routes/LandingPage';
import AddWhiskeyPage from '../../Routes/AddWhiskeyPage';
import ReviewWhiskeyPage from '../../Routes/ReviewWhiskeyPage';
import LoginPage from '../../Routes/LoginPage';
import ListPage from '../../Routes/ListPage';
import WhiskeyLookupPage from '../../Routes/WhiskeyLookupPage';
import WhiskeyPage from '../../Routes/WhiskeyPage';
import RegistrationPage from '../../Routes/RegistrationPage';
import NotFoundPage from '../../Routes/NotFoundPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main role='main'>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/whiskeyList'} component={ListPage} />
            <Route exact path={'/whiskeys'} component={WhiskeyLookupPage}/>
            <Route exact path={'/whiskeys/:whiskeyId'} component={WhiskeyPage}/>
            <Route path={'/whiskeys/:whiskeyId/reviewWhiskey'} component={ReviewWhiskeyPage}/>
            <Route path={'/addWhiskey'} component={AddWhiskeyPage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
