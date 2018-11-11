import React from 'react';

const Summary = ({submission}) => {
    return(
        <div className="card z-depth-1 submission-summary">
            <div className="card-content grey-text text-darken-4">
                <span className="card-title"> {submission.title} </span>
                <p>Subject: {submission.subject}</p>
                <p>Date: {submission.date}</p>
                <p>Time: {submission.time}</p>
            </div>
        </div>
    )
}

export default Summary
