import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name : '',
            email:props.email ? props.email : '',
            mobile:props.mobile ? props.mobile : '',
            departmentId:props.department ? props.department : ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.departmentId
        }

        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>  
            
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                    <label> name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"/>
            </div>
            <div className="form-group">
                    <label> email</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" className="form-control"/>
            </div>
            <div className="form-group">
                    <label> mobile</label>
                    <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" className="form-control"/>
            </div>
            <div className="form-group">
                    <label> department</label>
                    <select  className="form-control" name="departmentId" onChange={this.handleChange}>
                        <option>select</option>
                        {
                            this.props.departments.map(department=>{
                                return <option key={department._id} value={department._id}>{department.name}</option>
                            })
                        }
                       </select>
            </div>
            <br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
                </div>             
        )
    }
}

const mapStateToProps = (state, props) => {
    return{
        departments: state.depatments
    }
}
export default connect(mapStateToProps)(EmployeeForm)