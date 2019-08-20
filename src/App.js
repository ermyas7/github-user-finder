import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import Header from './components/layouts/header/Header';
import Users from './container/users/Users';
import Search from './container/users/search/Search';
import Alert from './components/layouts/alert/Alert';

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    alert: null
  };

  searchUsers = async user => {
    try{
      this.setState({isLoading: true})
      let url = `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

      let res = await axios.get(url);
      this.setState({users: res.data.items, isLoading: false});
    }catch(err){
      console.log(err);
      this.setState({isLoading: false});
    } 
  }

  clearUser = () => this.setState({users: []})
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}});
    setTimeout(() => this.setState({alert: null}), 4000);
  }

  render(){
    let {users, isLoading} = this.state;
    let showClear = users.length > 0? true : false;
    return (
      <Router>
        <div className="App">
        <Header icon={'fab fa-github'} title={'Github Finder'}/>
        <div className="container">
         <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render = { props => (
            <Fragment>
              <Search searchUsers={this.searchUsers}
              showClear={showClear}
              clearUser={this.clearUser}
              setAlert={this.setAlert}/>  
              <Users users={users} isLoading={isLoading}/>
            </Fragment>
           ) }/>
        </Switch>

        </div>
      </div>
      </Router>
    );
  }
}

export default App;
