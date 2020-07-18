import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'

 function DepartmentShow(props){
    
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
        return(
            <div>
                {
                    !_.isEmpty(props.department) &&(
                        <div>
                            <h2>{props.department.name}</h2>
                            <Link to = {`/departments/edit/${id}`}> Edit</Link>
                            <Link to = "/departments">  back</Link>
                        </div>
                    )
                }  
            </div>
        )
}

const mapStateToProps = (state, props) => {
    return {
        department: state.depatments.find(department => department._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(DepartmentShow)