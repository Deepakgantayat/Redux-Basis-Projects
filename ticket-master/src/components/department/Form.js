import React from 'react'

export default class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name : '',
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
        }

        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>               
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                       Department
                    </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name"/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
