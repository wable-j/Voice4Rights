import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from "./users";
import ngosReducer from "./ngos"

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer, ngosReducer
});

