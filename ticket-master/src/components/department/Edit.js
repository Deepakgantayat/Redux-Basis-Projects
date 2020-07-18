import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import _ from 'lodash'
import {startEditDepartment} from '../../actions/department'
import DepartmentForm from './Form'


function DepartmentEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditDepartment(formData, props))
    }
        return(
            <div>
                {
                    !_.isEmpty(props.department) &&(
                        <div>
                             <h2> Edit customer - {props.department.name}</h2>
                                {Object.keys(props.department).length !== 0 && <DepartmentForm {...props.department}
                                handleSubmit = {handleSubmit}/>}
                        </div>
                    )
                }     
            </div>
        )
}

const mapStateToProps = (state, props)=> {
    return {
        department : state.depatments.find(department => department._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(DepartmentEdit)