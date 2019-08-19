import React, {Component} from 'react';

import './App.scss';

import Header from './layouts/header/Header';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header icon={'fab fa-github'} title={'Github Finder'}/>
      </div>
    );
  }
}

export default App;
