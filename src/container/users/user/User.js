import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './User.scss';
import Spinner from '../../../components/layouts/Spinner';
import UserCard from './UserCard';
import Status from './Status';
import UserRepos from './UserRepos';

const User = ({user, match, getUser, getRepos, isLoading, repos}) => {
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

User.propTypes = {
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired
};

export default User;

