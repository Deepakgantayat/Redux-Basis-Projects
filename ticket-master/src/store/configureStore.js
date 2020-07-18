import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import customersReducer from '../reducers/customers'
import userReducer from '../reducers/user'
import departmentsReducer from '../reducers/department'
import employeesReducer from '../reducers/employees'
import ticketsReducer from '../reducers/tickets'

const configureStore = () => {
    const store = createStore(combineReducers({
        customers : customersReducer,
        user: userReducer,
        depatments: departmentsReducer,
        employees: employeesReducer,
        tickets: ticketsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore