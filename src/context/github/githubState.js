import React, {useReducer} from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';

import {
    SEARCH_USERS,
    CLEAR_USER,
    GET_USER,
    GET_REPOS,
    SET_LOADING
}from './../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users
    const searchUsers = async user => {
          setLoading();
          let url = `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
          let res = await axios.get(url);
          dispatch({
              type: SEARCH_USERS,
              payload: res.data.items
          })
      }

    //get user
    const getUser = async user => {
          setLoading();
          let url = `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    
          let res = await axios.get(url);
          dispatch({
            type: GET_USER,
            payload: res.data         
          });
      }

    //clear user
    const clearUser = () => dispatch({type: CLEAR_USER});

    //get repos
    const getRepos = async user => {
          setLoading();
          let url = `https://api.github.com/users/${user}/repos?per_page=8&&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    
          let res = await axios.get(url);
          dispatch({
              type: GET_REPOS,
              payload: res.data
          })
      }

    //set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }  

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        searchUsers: searchUsers,
        clearUser: clearUser,
        getUser: getUser,
        getRepos: getRepos
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState;