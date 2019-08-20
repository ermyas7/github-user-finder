import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url, html_url}}) => {
   
    return (
        <div className="card">
            <img src={avatar_url} alt="avatar" style={{width: '6rem'}} className="rounded"/>
            <p>{login}</p>
            <a href={html_url} className="btn-small bg-dark">More</a>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
