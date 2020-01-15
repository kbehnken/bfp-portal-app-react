import axios from 'axios'

// initial state

const initialState = {
    equipmentList: [],
    loading: true
};

// constants
const REQUEST_EQUIPMENT_DATA = 'REQUEST_EQUIPMENT_DATA';
const ADD_EQUIPMENT_DATA = 'ADD_EQUIPMENT_DATA';
const UPDATE_EQUIPMENT_DATA = 'UPDATE_EQUIPMENT_DATA';
const REMOVE_EQUIPMENT_DATA = 'REMOVE_EQUIPMENT_DATA';

// action creators
export function requestEquipmentData() {
    let data = axios.get('/api/equipment').then(res => res.data)
    return {
        type: REQUEST_EQUIPMENT_DATA,
        payload: data
    };
}
export function addEquipmentData(name, description) {
    return {
        type: ADD_EQUIPMENT_DATA,
        payload: axios.post('/api/equipment', {
            name,
            description
        })
    };
}
export function updateEquipmentData(name, description, id) {
    return {
        type: UPDATE_EQUIPMENT_DATA,
        payload: axios.put(`/api/equipment/${id}`, {
            name,
            description
        })
    };
}
export function removeEquipmentData(id) {
    return {
        type: REMOVE_EQUIPMENT_DATA,
        payload: axios.delete(`/api/equipment/${id}`)
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_EQUIPMENT_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            })
        case REQUEST_EQUIPMENT_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                equipmentList: action.payload
            })
        case ADD_EQUIPMENT_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case ADD_EQUIPMENT_DATA + '_FULFILLED':
            return {
                ...previousState,
                equipmentList: action.payload.data,
                loading: false
            };
        case UPDATE_EQUIPMENT_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case UPDATE_EQUIPMENT_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                equipmentList: action.payload.data
            };
        case REMOVE_EQUIPMENT_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case REMOVE_EQUIPMENT_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                equipmentList: action.payload.data
            };
        default: return (previousState);
    }
}