import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../../Routes/LandingPage';
import AddWhiskeyPage from '../../Routes/AddWhiskeyPage';
import ReviewWhiskeyPage from '../../Routes/ReviewWhiskeyPage';
import LoginPage from '../../Routes/LoginPage';
import ListPage from '../../Routes/ListPage';
import WhiskeyLookupPage from '../../Routes/WhiskeyLookupPage';
import WhiskeyPage from '../../Routes/WhiskeyPage';
import RegistrationPage from '../../Routes/RegistrationPage';
import NotFoundPage from '../../Routes/NotFoundPage';
import PrivateRoute from '../../Components/Utils/PrivateRoute'
import PublicOnlyRoute from '../../Components/Utils/PublicOnlyRoute'
import WhiskeyContext from '../../Context/WhiskeyContext';
import './App.css';

class App extends Component {
  static contextType = WhiskeyContext;

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <main role='main'>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/whiskeyList'} component={ListPage} />
            <Route exact path={'/whiskeys'} component={WhiskeyLookupPage}/>
            <Route exact path={'/whiskeys/:whiskeyId'} component={WhiskeyPage}/>
            <PrivateRoute path={'/whiskeys/:whiskeyId/addReview'} component={ReviewWhiskeyPage}/>
            <PrivateRoute path={'/addWhiskey'} component={AddWhiskeyPage} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
