import axios from 'axios'

// initial state

const initialState = {
    callList: [],
    loading: true
};

// constants
const REQUEST_CALL_DATA = 'REQUEST_CALL_DATA';
const ADD_CALL_DATA = 'ADD_CALL_DATA';
const UPDATE_CALL_DATA = 'UPDATE_CALL_DATA';
const REMOVE_CALL_DATA = 'REMOVE_CALL_DATA';

// action creators
export function requestCallData() {
    let data = axios.get('/api/calls').then(res => res.data)
    console.log(data)
    return {
        type: REQUEST_CALL_DATA,
        payload: data
    };
}
export function addCallData(serviceDate, salt, phosphates, tds, filterPsi, chlorine, ph, alkalinity, cya, trichlorShock, sodaAsh, sodiumBicarbonate, tabs, granularTrichlor, phosphateRemover, userId, serviceAddressId, technician) {
    return {
        type: ADD_CALL_DATA,
        payload: axios.post('/api/call', {
            serviceDate,
            salt,
            phosphates,
            tds,
            filterPsi,
            chlorine,
            ph,
            alkalinity,
            cya,
            trichlorShock,
            sodaAsh,
            sodiumBicarbonate,
            tabs,
            granularTrichlor,
            phosphateRemover,
            userId,
            serviceAddressId,
            technician
        })
    };
}
export function updateCallData(serviceDate, salt, phosphates, tds, filterPsi, chlorine, ph, alkalinity, cya, trichlorShock, sodaAsh, sodiumBicarbonate, tabs, granularTrichlor, phosphateRemover, userId, serviceAddressId, technician, id) {
    return {
        type: UPDATE_CALL_DATA,
        payload: axios.put(`/api/call?id=${id}`, {
            serviceDate,
            salt,
            phosphates,
            tds,
            filterPsi,
            chlorine,
            ph,
            alkalinity,
            cya,
            trichlorShock,
            sodaAsh,
            sodiumBicarbonate,
            tabs,
            granularTrichlor,
            phosphateRemover,
            userId,
            serviceAddressId,
            technician
        })
    };
}
export function removeCallData(id) {
    return {
        type: REMOVE_CALL_DATA,
        payload: axios.delete(`/api/call/${id}`)
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_CALL_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            })
        case REQUEST_CALL_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                serviceList: action.payload
            })
        case ADD_CALL_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case ADD_CALL_DATA + '_FULFILLED':
            return {
                ...previousState,
                serviceList: action.payload.data,
                loading: false
            };
        case UPDATE_CALL_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case UPDATE_CALL_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                serviceList: action.payload.data
            };
        case REMOVE_CALL_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case REMOVE_CALL_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                serviceList: action.payload.data
            };
        default: return (previousState);
    }
}