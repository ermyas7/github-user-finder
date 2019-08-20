import React from "react";
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
          <a href="/" className="navbar-right-link">
            Home
          </a>
        </li>
        <li className="navbar-right-item">
          <a href="#" className="navbar-right-link">
            About
          </a>
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
