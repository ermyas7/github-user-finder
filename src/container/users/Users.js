import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';
import Spinner from '../../components/layouts/Spinner';

const Users = ({users, isLoading}) => {
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div style={style}>
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))
            }       
        </div>
    )
}

let style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2rem'
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default Users;
