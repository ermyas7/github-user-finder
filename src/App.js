import React, { Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import Header from './components/layouts/header/Header';
import Users from './container/users/Users';
import Search from './container/users/search/Search';
import Alert from './components/layouts/alert/Alert';
import About from './components/pages/About';
import User from './container/users/user/User';

import GithubState from './context/github/githubState';

const App = () => {
    const [alert, setAlert] = useState(null);

  const updateAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 4000);
  }

  return (
    <GithubState>
      <Router>
        <div className="App">
        <Header icon={'fab fa-github'} title={'Github Finder'}/>
        <div className="container">
          <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render = { props => (
            <Fragment>
              <Search
              setAlert={updateAlert}/>  
              <Users/>
            </Fragment>
            ) }/>

            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props => (
              <User {...props}/>
            )}/>
        </Switch>

        </div>
      </div>
      </Router>
  </GithubState>    
  );
}

export default App;
