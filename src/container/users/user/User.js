import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './User.scss';
import Spinner from '../../../components/layouts/Spinner';
import UserCard from './UserCard';
import Status from './Status';
import UserRepos from './UserRepos';

class User extends Component {

    static propTypes = {
        getUser: PropTypes.func.isRequired,
        getRepos: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        repos: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getRepos(this.props.match.params.login);
    }
    render() {
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
        } = this.props.user;

        const {isLoading, repos} = this.props;

        if(isLoading) return <Spinner/>;

        return (
            <div className="User">
                <div className="User-header">
                    <Link to="/" className="User-back">Back</Link>
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
}

export default User

