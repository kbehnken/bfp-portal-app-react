import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import addressReducer from './addressReducer';
import callReducer from './callReducer';
import serviceReducer from './serviceReducer';
import equipmentReducer from './equipmentReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers( {
    session: sessionReducer,
    users: userReducer,
    address: addressReducer,
    service: serviceReducer,
    equipment: equipmentReducer,
    call: callReducer,
    invoice: invoiceReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));