// initial state

const initialState = {
    isAdmin: false,
    firstName: '',
    lastName: '',
    emailAddress: ''
};

// constants
const SET_SESSION_DATA = 'SET_SESSION_DATA';

// action creators
export function setSessionData(newData) {
    return {
        type: SET_SESSION_DATA,
        payload: newData
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case SET_SESSION_DATA:
            return ({
                ...previousState,
                ...action.payload
            })
        default: return (previousState);
    }
}