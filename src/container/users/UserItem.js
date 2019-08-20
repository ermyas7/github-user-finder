import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({user: {login, avatar_url, html_url}}) => {
   
    return (
        <div className="card">
            <img src={avatar_url} alt="avatar" style={{width: '6rem'}} className="rounded"/>
            <p>{login}</p>
            <Link to={`user/${login}`} className="btn-small bg-dark">More</Link>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
