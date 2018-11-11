import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
    return(
        <header>
        <nav>
            <div className="nav-wrapper grey darken-4">
                <NavLink to='/' className="brand-logo center">Logo</NavLink>
                <ul className="left">
                  <li onClick={props.drawerClickHandler}><i className="material-icons">menu</i></li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;
