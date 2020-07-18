import React from 'react'
import { connect } from 'react-redux'


class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code: '',
            customer: '',
            department: '',
            employee:'',
            message:'',
            priority:''
        }
    }
    
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault()
        const formData={
            code: this.state.code,
            customer: this.state.customer,
            department: this.state.department,
            employee: this.state.employee,
            message: this.state.message,
            priority: this.state.priority,

        }

        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}/>
                <div className ="form-group">
                <label>Code no </label>
                <input type = "text" value = {this.state.code} onChange={this.handleChange} name = "code" className="form-control"/>
                </div>
                <div className ="form-group">
                <label>Customer</label>
                <select  className="form-control" name="customer" onChange={this.handleChange}>
                        <option>select</option>
                        {
                            this.props.customers.map(customer=>{
                                return <option key={customer._id} value={customer._id}>{customer.name}</option>
                            })
                        }
                       </select>
                </div>
                <div className ="form-group">
                <label>Department </label>
                <select  className="form-control" name="department" onChange={this.handleChange}>
                        <option>select</option>
                        {
                            this.props.department.map(department=>{
                                return <option key={department._id} value={department._id}>{department.name}</option>
                            })
                        }
                       </select>
                </div>
                <div className ="form-group">
                <label> Employee</label>
                <select className="form-control" name="employee" onChange={this.handleChange}>
                        <option>select</option>
                        {
                            this.props.employees.map(employee=>{
                                return <option key={employee._id} value={employee._id}>{employee.name}</option>
                            })
                        }
                       </select>
                </div>
                <div className ="form-group">
                <label>Message</label>
                <input type = "text" value = {this.state.message} onChange={this.handleChange} name = "message" className="form-control"/>
                </div>
                <div className="from-group">
                <label>Priority</label>
                <select name="priority" onChange={this.handleChange} className="form-control" name = "priority">
                       <option>High</option>
                       <option>Low</option>
                   </select>
                </div>
                <br/>
                <input className="btn btn-primary"type="submit"/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
    return{
        department: state.depatments,
        employees: state.employees,
        customers: state.customers
    }
}
export default connect(mapStateToProps)(TicketForm)