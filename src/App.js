import React, { Fragment, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import Header from './components/layouts/header/Header';
import Home from './components/pages/Home';
import Alert from './components/layouts/alert/Alert';
import About from './components/pages/About';
import User from './container/users/user/User';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
          <Header icon={'fab fa-github'} title={'Github Finder'}/>
          <div className="container">
            <Alert/>
          <Switch>
            <Route exact path='/' component={Home}/>

              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User}/>
          </Switch>

          </div>
        </div>
        </Router>
      </AlertState>  
  </GithubState>    
  );
}

export default App;
