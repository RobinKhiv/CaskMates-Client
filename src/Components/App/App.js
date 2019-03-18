import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../Routes/LandingPage';
import AddWhiskeyPage from '../../Routes/AddWhiskeyPage';
import ReviewWhiskeyPage from '../../Routes/ReviewWhiskeyPage';
import LoginPage from '../../Routes/LoginPage';
import ListPage from '../../Routes/ListPage';
import NotFoundPage from '../../Routes/NotFoundPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main role='main'>
          <Switch>
            <Route
                exact
                path={'/'}
                component={LandingPage}
                />
            <Route
                path={'/addWhiskey'}
                component={AddWhiskeyPage}
                />
            <Route
                path={'/reviewWhiskey'}
                component={ReviewWhiskeyPage}
                />
            <Route
                path={'/login'}
                component={LoginPage}
                />
            <Route
                path={'/list'}
                component={ListPage}
                />
            <Route
                component={NotFoundPage}
                />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
