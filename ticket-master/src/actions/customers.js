import axios from 'axios'

export const setCustomers = (customers) => {
    return {
        type: 'SET_CUSTOMERS',
        payload: customers
    }
}

export const startSetCustomers = () => {
    return (dispatch) => {
        axios.get('http://dct-ticket-master.herokuapp.com/customers', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const customers = response.data
            dispatch(setCustomers(customers))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const addCustomer = (customer) =>{
    return {
        type : 'ADD_CUSTOMER',
        payload: customer
    }
}

export const startAddCustomer = (formData, props) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/customers', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const customer = response.data
                dispatch(addCustomer(customer))
                props.history.push(`/customers/${customer._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editCustomer = (customer) =>{
    return {
        type: 'EDIT_CUSTOMER',
        payload: customer
    }
}

export const startEditCustomer = (formData,props) => {
    return (dispatch) => {
        axios.put(`http://dct-ticket-master.herokuapp.com/customers/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const customer = response.data
                dispatch(editCustomer(customer))
                props.history.push(`/customers/${customer._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeCustomer = (id) => {
    return {
        type: 'REMOVE_CUSTOMER',
        payload : id
    }
}

export const startRemoveCustomer = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://dct-ticket-master.herokuapp.com/customers/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeCustomer(response.data._id))
        })
    }    
}