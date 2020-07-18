import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/user'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData, this.props))
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input type = "text" value={this.state.email} onChange={this.handleChange} name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type = "password" value={this.state.password} onChange={this.handleChange} name="password" className="form-control"/>
                    </div>
                    <br/>
                    <input className="btn btn-primary"type ="submit"/>
                    
                </form>
            </div>
        )
    }
}

export default connect()(Login)