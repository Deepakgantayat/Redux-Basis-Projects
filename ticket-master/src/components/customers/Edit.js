import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import _ from 'lodash'
import {startEditCustomer} from '../../actions/customers'
import CustomerForm from './Form'


function CustomerEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditCustomer(formData, props))
    }
        return(
            <div>
                {
                    !_.isEmpty(props.customer) &&(
                        <div>
                             <h2> Edit customer - {props.customer.name}</h2>
                                {Object.keys(props.customer).length !== 0 && <CustomerForm {...props.customer}
                                handleSubmit = {handleSubmit}/>}
                        </div>
                    )
                }     
            </div>
        )
}

const mapStateToProps = (state, props)=> {
    return {
        customer : state.customers.find(customer => customer._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(CustomerEdit)