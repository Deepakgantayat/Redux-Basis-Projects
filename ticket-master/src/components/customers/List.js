import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startRemoveCustomer} from '../../actions/customers'


 function CustomerList(props){
    
   const handleRemove = (id) =>{
       props.dispatch(startRemoveCustomer(id))
    }
        return(
            <div className="row">
               <h2> Listing Customers - {props.customers.length}</h2>
               <table className="table">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Mobile</th>
                           <th>Show</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.customers.map((customer) =>{
                              return (<tr key ={customer._id}>
                                   <td><Link to ={`/customers/${customer._id}`}>{customer.name}</Link></td>
                                   <td>{customer.email}</td>
                                   <td>{customer.mobile}</td>
                                   <td><Link to = {`/customers/${customer._id}`}>show</Link></td>
                                   <td><button className="btn btn-primary" onClick= {() =>{
                                      
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        handleRemove(customer._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <Link to = "/customers/new">Add Customer</Link>

            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    }
}
export default connect(mapStateToProps)(CustomerList)