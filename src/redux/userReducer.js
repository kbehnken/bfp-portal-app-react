import axios from 'axios'

// initial state

const initialState = {
    usersList: [],
    loading: true
};

// constants
const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// action creators
export function requestUserData() {
    let data = axios.get('/api/v1/users').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    };
}
export function updateUserData(isAdmin, userRole, firstName, lastName, phoneNumber, emailAddress, password, id) {
    return {
        type: UPDATE_USER_DATA,
        payload: axios.put(`/api/v1/user/${id}`, {
            isAdmin,
            userRole,
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            password
        })
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case REQUEST_USER_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                usersList: action.payload
            };
        case UPDATE_USER_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case UPDATE_USER_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                usersList: action.payload.data
            };
        default: return (previousState);
    }
}