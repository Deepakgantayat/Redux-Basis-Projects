import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class TicketShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ticket: {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://dct-ticket-master.herokuapp.com/tickets/${id}`,{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const ticket= response.data
            this.setState({ticket})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    
    render(){
        const {code} = this.state.ticket
        return(
            <div>
                <h2>{code}</h2>
                <Link to = "/tickets"> back </Link>
            </div>
        )
    }
}