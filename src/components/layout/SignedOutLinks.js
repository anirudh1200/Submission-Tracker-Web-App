import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = props => {
    return(
        <ul className="bottom">
            <li onClick={props.closeit}><NavLink to='/signin'>Login</NavLink></li>
            <li onClick={props.closeit}><NavLink to='/signup'>SignUp</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
