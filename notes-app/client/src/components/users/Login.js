import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../actions/user'

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
                    <label>
                        email
                        <input type = "text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label><br/>
                    <label>
                        password
                        <input type = "password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </label><br/>
                    <input type ="submit"/>
                    
                </form>
            </div>
        )
    }
}

export default connect()(Login)