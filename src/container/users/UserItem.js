import React from 'react'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
   
    return (
        <div className="card">
            <img src={avatar_url} alt="avatar" style={{width: '6rem'}} className="rounded"/>
            <p>{login}</p>
            <a href={html_url} className="btn-small bg-dark">More</a>
        </div>
    )
}

export default UserItem
