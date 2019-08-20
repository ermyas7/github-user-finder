import React, {Fragment} from 'react'
import UserRepoItem from './UserRepoItem';
import PropTypes from 'prop-types';

const UserRepos = ({repos}) => {
    console.log(repos);
    return (
        <Fragment>
            {
                repos.map((repo) => (
                    <UserRepoItem repo={repo} key={repo.id}/>
                ))
            }
        </Fragment>
    )
}

UserRepos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default UserRepos;
