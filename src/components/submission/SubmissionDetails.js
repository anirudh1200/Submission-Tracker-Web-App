import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const SubmissionDetails = props => {
    console.log(props);
    const { submission } = props;
    if(submission){
        return(
            <div className="container section project-details">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <span className="card-title">{submission.title}</span>
                        <p>{submission.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Subject: {submission.subject}</div>
                        <div>Submission Date: {submission.date}</div>
                        <div>Time: {submission.time}</div>
                        <div>Posted by The Net Ninja</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container center">
                <p>Loading Details...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id =ownProps.match.params.id;
    const submissions = state.firestore.data.submissions;
    const submission = submissions ? submissions[id] : null;
    return{
        submission: submission
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'submissions' }
    ])
)(SubmissionDetails)
