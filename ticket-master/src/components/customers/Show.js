import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'

 function CustomerShow(props){
    
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
        return(
            <div>
                {
                    !_.isEmpty(props.customer) &&(
                        <div>
                            <h2>{props.customer.name} - {props.customer.email} - {props.customer.mobile}</h2>
                            <Link to = {`/customers/edit/${id}`}> Edit</Link>
                            <Link to = "/customers">  back</Link>
                        </div>
                    )
                }  
            </div>
        )
}

const mapStateToProps = (state, props) => {
    return {
        customer: state.customers.find(customer => customer._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(CustomerShow)