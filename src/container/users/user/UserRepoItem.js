import React from 'react';
import PropTypes from 'prop-types';

const UserRepoItem = ({repo}) => {
    return (
        <div className="User-repo">
            <a href={repo.html_url}>{repo.name}</a>
        </div>
    )
}

UserRepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default UserRepoItem;
