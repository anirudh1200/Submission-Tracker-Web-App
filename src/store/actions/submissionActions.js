export const createSubmission = (submission) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database

        const firestore = getFirestore();
        firestore.collection('submissions').add({
            ...submission,
            author: 'authorname',
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: 'CREATE_SUBMISSION',
                submission
            })
        }).catch((error) => {
            dispatch({
                type: 'CREATE_SUBMISSION_ERROR',
                error
            })
        })
    }
}
