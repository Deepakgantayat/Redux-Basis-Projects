import React from 'react'

export default class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            email: props.email ? props.email: '',
            mobile: props.mobile ? props.mobile: ''

        }
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>name</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>email</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>mobile</label>
                    <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" className="form-control"/>
                    </div>
                    <br/>
                    <input className="btn btn-primary" type ="submit" />
                </form>
            </div>
        )
    }
}