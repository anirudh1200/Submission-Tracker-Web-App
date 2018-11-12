import authReducer from './authReducer';
import submissionReducer from './submissionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    submission: submissionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
