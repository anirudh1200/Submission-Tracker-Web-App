import React from 'react'
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './SideDrawer.css'

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
            <SignedInLinks closeit={props.closeit} />
        </nav>
    )
}

export default SideDrawer;
