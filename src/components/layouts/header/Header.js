import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';


const Header = ({title, icon}) => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-left">
        <i className={icon}/>
        <h1 className="navbar-left-brand">{title}</h1>
      </div>
      <ul className="navbar-right">
        <li className="navbar-right-item">
          <Link  to="/" className="navbar-right-link">
            Home
          </Link>
        </li>
        <li className="navbar-right-item">
          <Link to="/about" className="navbar-right-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
    title:PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Header;
