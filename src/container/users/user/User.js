import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import './User.scss';
import Spinner from '../../../components/layouts/Spinner';
import UserCard from './UserCard';
import Status from './Status';
import UserRepos from './UserRepos';

import GithubContext from './../../../context/github/githubContext';

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {user, getUser,  isLoading,getRepos, repos } = githubContext;
    //memic component did mount
    useEffect( () => {
        getUser(match.params.login);
        getRepos(match.params.login);
    }, [])
    
    const {
        login,
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        hireable,
        bio,
        public_repos,
        public_gists,
        followers,
        following
    } = user;

    if(isLoading) return <Spinner/>;

    return (
        <div className="User">
            <div className="User-header">
                <Link to="/" className="User-back">Back to home</Link>
                <p className="User-hire">Hireable: {
                    hireable? <i className="fas fa-check color-secondary"></i> : <i className="fas fa-times color-primary"></i>
                } </p>
            </div>
            <UserCard
            name={name}
            location={location}
            bio={bio}
            html_url={html_url}
            login={login}
            company={company}
            blog={blog}
            avatar_url={avatar_url}/>
            
            <Status public_gists={public_gists}
            followers={followers}
            following={following}
            public_repos={public_repos}/>
            <UserRepos repos={repos}/>
        </div>
    )
}


export default User;

