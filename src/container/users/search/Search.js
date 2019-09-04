import React, { useState, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import GithubContext from './../../../context/github/githubContext';
import './Search.scss';


const Search = ({searchUsers, setAlert, clearUser, showClear}) => {
    const gitContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onChange = (evt) => setText(evt.target.value)
    const onSubmit = (evt) => {
        evt.preventDefault();
        if(text === ''){
            setAlert('please enter something', 'light');
        }else{
            gitContext.searchUsers(text);
            setText('');
        }
    }
    
        return (
            <Fragment>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" className="form-input" name="text" placeholder="Search Users..." value={text}
                    onChange={onChange}/>
                    <input type="submit" className="form-submit" value="Search"/>
                </form>
                {
                 showClear &&  <button className="form-clear"
                 onClick={clearUser}>Clear</button>
                }
                
            </Fragment>    
        )
}

Search.propTypes = {
    showClear: PropTypes.bool.isRequired,
    clearUser: PropTypes.func.isRequired,
};

export default Search;