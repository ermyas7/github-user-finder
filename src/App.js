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
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [alert, setAlert] = useState(null);

  //get user detail
  const getUser = async user => {
    try{
      setLoading(true);
      let url = `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

      let res = await axios.get(url);
      setUser(res.data);
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false);
    } 
  }

  //get recent user repos
  const getRepos = async user => {
    try{
      setLoading(true);;
      let url = `https://api.github.com/users/${user}/repos?per_page=8&&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

      let res = await axios.get(url);
      setRepos(res.data);
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false);
    } 
  }

  //clear user from previous search
  const clearUser = () => setUsers([]);
  const updateAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 4000);
  }

  let showClear = users.length > 0? true : false;
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
              showClear={showClear}
              clearUser={clearUser}
              setAlert={updateAlert}/>  
              <Users users={users} isLoading={isLoading}/>
            </Fragment>
            ) }/>

            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props => (
              <User {...props} getUser={getUser} user={user} isLoading={isLoading}
              getRepos={getRepos}
              repos={repos}/>
            )}/>
        </Switch>

        </div>
      </div>
      </Router>
  </GithubState>    
  );
}

export default App;
