import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const Navbar = props => {
    console.log(props);
    const { auth } = props;
    console.log(auth);
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


const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
