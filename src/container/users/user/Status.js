import React from 'react';
import PropTypes from 'prop-types';

const Status = ({followers, following, public_repos, public_gists}) => {
    return (
        <div className="User-status">
           <div className="User-badge User-badge-red">
                Followers: {followers}
           </div>

           <div className="User-badge User-badge-green">
                Following: {following}
           </div>

           <div className="User-badge">
                Public Repos: {public_repos}
           </div>

           <div className="User-badge User-badge-dark">
                Public Gists: {public_gists}
           </div>
        </div>
    )
}

Status.propTypes = {
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    public_gists: PropTypes.number.isRequired

}

export default Status;
