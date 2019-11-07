import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="Navbar nav-wrapper red darken-3">
      <div className="container">
        <h3 className="brand-logo">PokeTime</h3>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Navbar);