import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function EmployeeShow(props){
    const id= props.match.params.id
        return(
            <div>
               {
                    !_.isEmpty(props.employee) &&(
                        <div>
                            <h2>{props.employee.name} - {props.employee.email} - {props.employee.mobile} - {props.employee.department.name}</h2>
                            <Link to = {`/employees/edit/${id}`}> Edit</Link>
                            <Link to = "/employees">  back</Link>
                        </div>
                    )
                }  
            </div>
    )
       
}
const mapStateToProps = (state, props) => {
    return{
        employee: state.employees.find(employee => employee._id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(EmployeeShow)