import React from 'react';
import PropTypes from 'prop-types';


const UserCard = (props) => {

    return (
        <div className="User-card">
            <div className="User-card-left">
                <img  src={props.avatar_url} alt=""/>
                <h1 className="User-card-name">{props.name}</h1>
                {props.location && <p>Location: {props.location}</p>}
            </div>

            <div className="User-card-right">
               { props.bio &&
                <div className="User-card-bio">
                    <h3>
                        Bio
                    </h3>
                    <p>
                    {props.bio}
                    </p>
                </div>
               }
                <a href={props.html_url} className="User-card-btn">Visit Github Profile</a>
                <div className="User-card-user-detail">
                    <p>Username: {props.login}</p>
                    {props.company && <p>Company: {props.company} </p>}
                    {props.blog && <p>Website: {props.blog}</p>}
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
};

export default UserCard;
