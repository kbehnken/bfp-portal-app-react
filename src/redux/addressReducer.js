import axios from 'axios'

// initial state

const initialState = {
    addressList: [],
    loading: true
};

// constants
const REQUEST_USER_ADDRESS_DATA = 'REQUEST_USER_ADDRESS_DATA';
const ADD_ADDRESS_DATA = 'ADD_ADDRESS_DATA';
const UPDATE_ADDRESS_DATA = 'UPDATE_ADDRESS_DATA';
const REMOVE_ADDRESS_DATA = 'REMOVE_ADDRESS_DATA';

// action creators
export function requestUserAddressData() {
    let data = axios.get('/api/user-addresses').then(res => res.data)
    return {
        type: REQUEST_USER_ADDRESS_DATA,
        payload: data
    };
}
export function addAddressData(streetAddress, city, state, postalCode, mapUrl) {
    return {
        type: ADD_ADDRESS_DATA,
        payload: axios.post('/api/address', {
            streetAddress,
            city,
            state,
            postalCode,
            mapUrl,
        })
    };
}
export function updateEquipmentData(streetAddress, city, state, postalCode, mapUrl, id) {
    return {
        type: UPDATE_ADDRESS_DATA,
        payload: axios.put(`/api/address/${id}`, {
            streetAddress,
            city,
            state,
            postalCode,
            mapUrl,
        })
    };
}
export function removeAddressData(id) {
    return {
        type: REMOVE_ADDRESS_DATA,
        payload: axios.delete(`/api/address/${id}`)
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_ADDRESS_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            })
        case REQUEST_USER_ADDRESS_DATA + '_FULFILLED':
            console.log(action.payload)
            return ({
                ...previousState,
                loading: false,
                addressList: action.payload
            })
        case ADD_ADDRESS_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case ADD_ADDRESS_DATA + '_FULFILLED':
            return {
                ...previousState,
                addressList: action.payload.data,
                loading: false
            };
        case UPDATE_ADDRESS_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case UPDATE_ADDRESS_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                equipmentList: action.payload.data
            };
        case REMOVE_ADDRESS_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case REMOVE_ADDRESS_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                addressList: action.payload.data
            };
        default: return (previousState);
    }
}