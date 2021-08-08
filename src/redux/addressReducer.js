import axios from 'axios'

// initial state

const initialState = {
    addressList: [],
    loading: true
};

// constants
const REQUEST_ADDRESS_DATA_BY_CUSTOMER = 'REQUEST_ADDRESS_DATA_BY_CUSTOMER';
const REQUEST_USER_ADDRESS_DATA = 'REQUEST_USER_ADDRESS_DATA';
const ADD_ADDRESS_DATA = 'ADD_ADDRESS_DATA';
const UPDATE_ADDRESS_DATA = 'UPDATE_ADDRESS_DATA';
const REMOVE_ADDRESS_DATA = 'REMOVE_ADDRESS_DATA';

// action creators
export function requestAddressDataByCustomer(id) {
    let data = axios.get(`/api/v1/addresses/byCustomerId/${id}`).then(res => res.data)
    return {
        type: REQUEST_ADDRESS_DATA_BY_CUSTOMER,
        payload: data
    };
}

export function requestUserAddressData() {
    let data = axios.get('/api/v1/addresses').then(res => res.data)
    return ({
        type: REQUEST_USER_ADDRESS_DATA,
        payload: data
    });
}

export function addAddressData(streetAddress, city, state, postalCode, mapUrl, photoUrl, latitude, longitude) {
    return ({
        type: ADD_ADDRESS_DATA,
        payload: axios.post('/api/v1/addresses', {
            streetAddress,
            city,
            state,
            postalCode,
            mapUrl,
            photoUrl,
            latitude,
            longitude
        })
    });
}
export function updateAddressData(streetAddress, city, state, postalCode, mapUrl, photoUrl, latitude, longitude, id) {
    return ({
        type: UPDATE_ADDRESS_DATA,
        payload: axios.put(`/api/v1/addresses/${id}`, {
            streetAddress,
            city,
            state,
            postalCode,
            mapUrl,
            photoUrl,
            latitude,
            longitude
        })
    });
}
export function removeAddressData(id) {
    return ({
        type: REMOVE_ADDRESS_DATA,
        payload: axios.delete(`/api/v1/addresses/${id}`)
    });
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_ADDRESS_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            });
        case REQUEST_USER_ADDRESS_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                addressList: action.payload
            });
        case REQUEST_ADDRESS_DATA_BY_CUSTOMER + '_PENDING':
            return ({
                ...previousState,
                loading: true
            });
        case REQUEST_ADDRESS_DATA_BY_CUSTOMER + '_FULFILLED':
            console.log(action.payload)
            return ({
                ...previousState,
                loading: false,
                addressList: action.payload
            });
        case ADD_ADDRESS_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            });
        case ADD_ADDRESS_DATA + '_FULFILLED':
            return ({
                ...previousState,
                addressList: action.payload.data,
                loading: false
            });
        case UPDATE_ADDRESS_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            });
        case UPDATE_ADDRESS_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                equipmentList: action.payload.data
            });
        case REMOVE_ADDRESS_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            });
        case REMOVE_ADDRESS_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                addressList: action.payload.data
            });
        default: return (previousState);
    }
}