//Author: C Brandt
//action and reducer for the loggedIn state attribute

// action and reducer basic structor from https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux
//https://read.reduxbook.com/markdown/part1/03-updating-state.html
//https://www.pluralsight.com/guides/how-to-write-redux-reducer 
//https://redux.js.org/usage/troubleshooting
import {combineReducers} from 'redux';
const CHANGE_STATUS = "CHANGE_STATUS";

//Action for changing the value of whether a user is logged in
export function changeStatus(loggedInBool) {
    return{
        type: CHANGE_STATUS,
        loggedInBool,
    }
}

//the user will be assumed to be logged out unless other wise specified
const defaultLogIn = false;

//reducer to update the value of the log in status
function loggedIn(state=defaultLogIn, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            return{
                ...state,
                loggedIn: action.loggedInBool,
                }
        default:
            return state;
    }
}

const coopApp = combineReducers({
    loggedIn
});

export default coopApp;