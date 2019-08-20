import React, { Component } from 'react';
import './Search.scss';


class Search extends Component {
    state = {
        text: ''
    }

    onChange = (evt) => this.setState({[evt.target.name]: evt.target.value})
    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <input type="text" className="form-input" name="text" placeholder="Search Users..." value={this.state.text}
                onChange={this.onChange}/>
                <input type="submit" className="form-submit" value="Search"/>
            </form>
        )
    }
}

export default Search;