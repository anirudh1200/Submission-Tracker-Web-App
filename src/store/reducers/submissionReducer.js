const initState = {
    submissions: [
        {id: 0, title: 'Assignment1', subject:'DLDV', date:'23/02/2018', time: '2pm', content: 'dummy content'},
        {id: 1, title: 'Tutorial2', subject:'ABCD', date:'33/02/2018', time: '3pm', content: 'dummy content2'}
    ]
}

const submissionReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_SUBMISSION':
            console.log("Created project", action.submission);
            return state;
        case 'CREATE_SUBMISSION_ERROR':
            console.log("Create project error", action.error);
            return state;
        default:
            return state;
    }
}

export default submissionReducer;
