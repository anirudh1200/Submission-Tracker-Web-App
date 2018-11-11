export const createSubmission = (submission) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({
            type: 'CREATE_SUBMISSION',
            submission
        })
    }
}
