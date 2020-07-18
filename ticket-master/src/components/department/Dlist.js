import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DepartmentForm from './Form'
import {startRemoveDepartment} from '../../actions/department'
import {startAddDepartment} from '../../actions/department'

 function DepartmentList(props){
    const handleSubmit = (formData) => {
        props.dispatch(startAddDepartment(formData, props))
    } 
   const handleRemove = (id) =>{
       props.dispatch(startRemoveDepartment(id))
    }
        return(
            <div className="row">
               <h2> Listing departments - {props.departments.length}</h2>
               <table className="table borderless">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Show</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.departments.map((department) =>{
                              return (<tr key ={department._id}>
                                   <td><Link to ={`/departments/${props.match.params.id}`}>{department.name}</Link></td>
                                   <td><Link to = {`/departments/${props.match.params.id}`}>Edit</Link></td>
                                   <td><button className="btn btn-primary"onClick= {() =>{  
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        handleRemove(department._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <DepartmentForm handleSubmit = {handleSubmit}/>

            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers,
        departments: state.depatments
    }
}
export default connect(mapStateToProps)(DepartmentList)