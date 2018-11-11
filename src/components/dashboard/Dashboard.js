import React, { Component } from 'react';
import Summary from '../submission/Summary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component{
    render(){
        const { submissions } = this.props;
        return(
            <div className="dashboard container">
                <div className="project-list section">
                    {submissions && submissions.map(submission => {
                        return(
                            <Summary submission={submission} key={submission.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
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
