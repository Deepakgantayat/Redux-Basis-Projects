import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {startEditEmpolyee} from '../../actions/employees'
import EmployeeForm from './Eform'


function EmployeeEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditEmpolyee(formData, props))
    }
        return(
            <div>
                {
                    !_.isEmpty(props.employee) &&(
                        <div>
                             <h2> Edit Employee - {props.employee.name}</h2>
                                {Object.keys(props.employee).length !== 0 && <EmployeeForm {...props.employee}
                                handleSubmit = {handleSubmit}/>}
                        </div>
                    )
                }     
            </div>
        )
}

const mapStateToProps = (state, props)=> {
    return {
        employee: state.employees.find(employee => employee._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EmployeeEdit)