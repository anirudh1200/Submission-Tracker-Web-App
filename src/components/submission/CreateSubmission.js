import React, { Component } from 'react';

class CreateSubmission extends Component{

    state = {
        title: '',
        subject: '',
        date: '',
        time: '',
        content: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-4 center">Add New Submission</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>

                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-1">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateSubmission
