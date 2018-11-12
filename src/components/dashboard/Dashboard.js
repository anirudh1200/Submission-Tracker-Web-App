import React, { Component } from 'react';
import Summary from '../submission/Summary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        const { submissions } = this.props;
        return(
            <div className="dashboard container">
                <div className="project-list section">
                    {submissions && submissions.map(submission => {
                        return(
                            <Link to={'/submission/'+submission.id} key={submission.id}>
                                <Summary submission={submission} key={submission.id} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        submissions: state.firestore.ordered.submissions
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'submissions'
        }
    ])
)(Dashboard)
