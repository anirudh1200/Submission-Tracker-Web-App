import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = props => {
    return(
        <ul className="bottom">
            <li onClick={props.closeit}><NavLink to='/'>Add New Submission</NavLink></li>
            <li onClick={props.closeit}><NavLink to='/'>SignOut</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
