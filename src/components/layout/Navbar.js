import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = props => {
    return(
        <header>
        <nav>
            <div className="nav-wrapper grey darken-3">
                <a href="#" className="brand-logo center">Logo</a>
                <ul className="left">
                  <li onClick={props.drawerClickHandler}><i className="material-icons">menu</i></li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;
