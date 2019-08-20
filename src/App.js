import React, {Component} from 'react';
import axios from 'axios';

import './App.scss';

import Header from './components/layouts/header/Header';
import Users from './container/users/Users';
import Search from './container/users/search/Search';

class App extends Component {
  state = {
    users: [],
    isLoading: false
  };

  searchUsers = async user => {
    try{
      this.setState({isLoading: true})
      let url = `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

      let res = await axios.get(url);
      console.log(res)
      this.setState({users: res.data.items, isLoading: false});
    }catch(err){
      console.log(err);
      this.setState({isLoading: false});
    } 
  }

  clearUser = () => this.setState({users: []})
  render(){
    let {users, isLoading} = this.state;
    let showClear = users.length > 0? true : false;
    return (
      <div className="App">
        <Header icon={'fab fa-github'} title={'Github Finder'}/>
        <div className="container">
        <Search searchUsers={this.searchUsers}
         showClear={showClear}
         clearUser={this.clearUser}/>  
        <Users users={users} isLoading={isLoading}/>
        </div>
      </div>
    );
  }
}

export default App;
