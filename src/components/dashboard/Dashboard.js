import React, { Component } from 'react';
import Summary from '../submission/Summary';
import { connect } from 'react-redux';

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
    return{
        submissions: state.submission.submissions
    }
}

export default connect(mapStateToProps)(Dashboard)
