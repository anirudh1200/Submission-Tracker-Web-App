import React from 'react';
import { NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './SideDrawer.css'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if(props.show){
            drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li onClick={props.closeit}><NavLink to='/'>Test1</NavLink></li>
                <li onClick={props.closeit}><NavLink to='/'>Test2</NavLink></li>
                <li onClick={props.closeit}><NavLink to='/'>Test3</NavLink></li>
                <li onClick={props.closeit}><NavLink to='/'>Test4</NavLink></li>
            </ul>
            <SignedOutLinks closeit={props.closeit} />

        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SideDrawer);
