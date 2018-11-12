const initState = {
    submissions: []
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
