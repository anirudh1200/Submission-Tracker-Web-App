import authReducer from './authReducer';
import submissionReducer from './submissionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    submission: submissionReducer,
    firestore: firestoreReducer
});

export default rootReducer;
