import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import {startAddCustomer} from '../../actions/customers'


function CustomerNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddCustomer(formData, props))
    }
        return(
            <div>
                <h2>Create new customer</h2>
                <CustomerForm handleSubmit = {handleSubmit}/>
            </div>
        )
}

export default connect()(CustomerNew)