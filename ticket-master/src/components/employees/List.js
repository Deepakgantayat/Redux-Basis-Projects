import React from 'react'
import {Link} from 'react-router-dom'
import {startRemoveEmployee} from '../../actions/employees'
import { connect } from 'react-redux'

 function EmployeeList(props){
   
    const handleRemove = (id) =>{
        props.dispatch(startRemoveEmployee(id))
     }
       
        return(
            <div className="row">
                <h2> Listing Employees - {props.employees.length}</h2>
                <table className="table">
                   <thead>
                       <tr>     
                           <th>Name</th>
                           <th>Email</th>
                           <th>Mobile</th>
                           <th>Department</th>
                           <th>Show</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.employees.map((employee) =>{
                              return (<tr key ={employee._id}>
                                   <td><Link to ={`/employees/${employee._id}`}>{employee.name}</Link></td>
                                   <td>{employee.email}</td>
                                   <td>{employee.mobile}</td>
                                   <td>{employee.department.name}</td>
                                   <td><Link to = {`/employees/${employee._id}`}>show</Link></td>
                                   <td><button className="btn btn-primary"onClick= {() =>{  
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        handleRemove(employee._id)
                                       }
                                   }}>remove</button></td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <br/>
               
               <Link to = "/employees/new">Add Employee</Link>

            </div>
        )
}
 const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        departments: state.depatments
    }
}

export default connect(mapStateToProps)(EmployeeList)