import React, { useState, Fragment, useContext } from 'react';

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
                 gitContext.users.length > 0 &&  <button className="form-clear"
                 onClick={gitContext.clearUser}>Clear</button>
                }
                
            </Fragment>    
        )
}

export default Search;