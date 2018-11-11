import React, { Component } from 'react';
import Summary from '../submission/Summary';

class Dashboard extends Component{
    render(){


        return(

            <div className="dashboard container">
                <div className="project-list section">

                    <Summary />
                    <Summary />
                    <Summary />
                    <Summary />

                </div>
            </div>

        )
    }
}

export default Dashboard
