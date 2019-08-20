import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './Search.scss';


class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        clearUser: PropTypes.func.isRequired,
    }

    onChange = (evt) => this.setState({[evt.target.name]: evt.target.value})
    onSubmit = (evt) => {
        evt.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('please enter something', 'light');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    }
    render() {
        return (
            <Fragment>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" className="form-input" name="text" placeholder="Search Users..." value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" className="form-submit" value="Search"/>
                </form>
                {
                 this.props.showClear &&  <button className="form-clear"
                 onClick={this.props.clearUser}>Clear</button>
                }
                
            </Fragment>    
        )
    }
}

export default Search;