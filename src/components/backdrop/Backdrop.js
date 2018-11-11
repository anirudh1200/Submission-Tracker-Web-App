import React from 'react';
import './Backdrop.css';

const Backdrop = props => {
    return(
        <div className="mybackdrop" onClick={props.click} />
    )
}

export default Backdrop;
