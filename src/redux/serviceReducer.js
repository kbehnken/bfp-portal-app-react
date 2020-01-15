import axios from 'axios'

// initial state

const initialState = {
    serviceList: [],
    loading: true
};

// constants
const REQUEST_SERVICE_DATA = 'REQUEST_SERVICE_DATA';
const ADD_SERVICE_DATA = 'ADD_SERVICE_DATA';
const UPDATE_SERVICE_DATA = 'UPDATE_SERVICE_DATA';
const REMOVE_SERVICE_DATA = 'REMOVE_SERVICE_DATA';

// action creators
export function requestServiceData() {
    let data = axios.get('/api/services').then(res => res.data)
    console.log(data)
    return {
        type: REQUEST_SERVICE_DATA,
        payload: data
    };
}
export function addServiceData(name, description) {
    return {
        type: ADD_SERVICE_DATA,
        payload: axios.post('/api/service', {
            name,
            description
        })
    };
}
export function updateServiceData(name, description, id) {
    return {
        type: UPDATE_SERVICE_DATA,
        payload: axios.put(`/api/service?id=${id}`, {
            name,
            description
        })
    };
}
export function removeServiceData(id) {
    return {
        type: REMOVE_SERVICE_DATA,
        payload: axios.delete(`/api/service/${id}`)
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_SERVICE_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            })
        case REQUEST_SERVICE_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                serviceList: action.payload
            })
        case ADD_SERVICE_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case ADD_SERVICE_DATA + '_FULFILLED':
            return {
                ...previousState,
                serviceList: action.payload.data,
                loading: false
            };
        case UPDATE_SERVICE_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case UPDATE_SERVICE_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                serviceList: action.payload.data
            };
        case REMOVE_SERVICE_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case REMOVE_SERVICE_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                serviceList: action.payload.data
            };
        default: return (previousState);
    }
}