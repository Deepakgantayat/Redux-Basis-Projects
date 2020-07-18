import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App';

import configureStore from './store/configureStore'

import 'bootstrap/dist/css/bootstrap.css'

import {startSetCustomers} from './actions/customers'
import {startGetUser} from './actions/user'
import {startSetDepartments} from './actions/department'
import {startSetEmployees} from './actions/employees'
import {startSetTickets} from './actions/tickets'

const store = configureStore()

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

//handle all page reloads, and also get the initial data from the server to store it in the redux store
if(localStorage.getItem('authToken')) {
    store.dispatch(startSetCustomers())
    store.dispatch(startGetUser())
    store.dispatch(startSetDepartments())
    store.dispatch(startSetEmployees())
    store.dispatch(startSetTickets())
}
const ele = (

    <Provider store = {store}>
        <App/>
    </Provider>

)

ReactDOM.render(ele, document.getElementById('root'));

