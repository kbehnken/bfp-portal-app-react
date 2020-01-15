import axios from 'axios'

// initial state

const initialState = {
    billingHistory: [],
    loading: true
};

// constants
const REQUEST_INVOICE_DATA = 'REQUEST_INVOICE_DATA';
const ADD_INVOICE_DATA = 'ADD_INVOICE_DATA';
const UPDATE_INVOICE_DATA = 'UPDATE_INVOICE_DATA';
const REMOVE_INVOICE_DATA = 'REMOVE_INVOICE_DATA';

// action creators
export function requestInvoiceData() {
    let data = axios.get('/api/invoices').then(res => res.data)
    return {
        type: REQUEST_INVOICE_DATA,
        payload: data
    };
}
export function addInvoiceData(serviceStart, serviceEnd, invoiceNumber, invoiceAmount, paymentDate, paymentType, paymentAmount, invoiceBalance, invoiceStatus, userId, serviceAddressId) {
    return {
        type: ADD_INVOICE_DATA,
        payload: axios.post('/api/invoice', {
            serviceStart,
            serviceEnd,
            invoiceNumber,
            invoiceAmount,
            paymentDate,
            paymentType,
            paymentAmount,
            invoiceBalance,
            invoiceStatus,
            userId,
            serviceAddressId
        })
    };
}
export function updateInvoiceData(serviceStart, serviceEnd, invoiceNumber, invoiceAmount, paymentDate, paymentType, paymentAmount, invoiceBalance, invoiceStatus, userId, serviceAddressId, id) {
    return {
        type: UPDATE_INVOICE_DATA,
        payload: axios.put(`/api/invoice/${id}`, {
            serviceStart,
            serviceEnd,
            invoiceNumber,
            invoiceAmount,
            paymentDate,
            paymentType,
            paymentAmount,
            invoiceBalance,
            invoiceStatus,
            userId,
            serviceAddressId
        })
    };
}
export function removeInvoiceData(id) {
    return {
        type: REMOVE_INVOICE_DATA,
        payload: axios.delete(`/api/invoice/${id}`)
    };
}

// reducer
export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case REQUEST_INVOICE_DATA + '_PENDING':
            return ({
                ...previousState,
                loading: true
            })
        case REQUEST_INVOICE_DATA + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                billingHistory: action.payload
            })
        case ADD_INVOICE_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case ADD_INVOICE_DATA + '_FULFILLED':
            return {
                ...previousState,
                billingHistory: action.payload.data,
                loading: false
            };
        case UPDATE_INVOICE_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case UPDATE_INVOICE_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                billingHistory: action.payload.data
            };
        case REMOVE_INVOICE_DATA + '_PENDING':
            return {
                ...previousState,
                loading: true
            };
        case REMOVE_INVOICE_DATA + '_FULFILLED':
            return {
                ...previousState,
                loading: false,
                billingHistory: action.payload.data
            };
        default: return (previousState);
    }
}