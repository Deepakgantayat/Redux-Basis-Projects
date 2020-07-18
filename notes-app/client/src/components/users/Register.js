import React from 'react'
import {startResgisterUser} from '../actions/user'
import {connect} from 'react-redux'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startResgisterUser(formData, this.props))
        
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>Register</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        username
                        <input type = "text" value={this.state.username} onChange={this.handleChange} name="username"/>
                    </label><br/>
                    <label>
                        email
                        <input type = "text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label><br/>
                    <label>
                        password
                        <input type = "password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </label><br/>
                    <input type = "submit" />
                    
                </form>
            </div>
        )
    }
}

export default connect()(Register)