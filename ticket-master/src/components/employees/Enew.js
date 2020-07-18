import React from 'react'
import EmployeeForm from "./Eform"
import { connect } from 'react-redux'
import {startAddEmployee} from '../../actions/employees'

function EmployeeNew (props){
    const handleSubmit = (formData) => {
        props.dispatch(startAddEmployee(formData, props))
    }
        return(
            <div>
                <h2>add employee</h2>
                <EmployeeForm handleSubmit={handleSubmit}/>
            </div>
        )
}
export default connect()(EmployeeNew)