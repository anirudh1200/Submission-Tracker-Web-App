import authReducer from './authReducer';
import submissionReducer from './submissionReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    submission: submissionReducer
});

export default rootReducer;
