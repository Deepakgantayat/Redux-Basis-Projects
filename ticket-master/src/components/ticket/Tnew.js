import React from 'react'
import TicketForm from './Tform'
import axios from 'axios'
import {startAddTicket} from '../../actions/tickets'
import { connect } from 'react-redux'

function TicketNew(props){
    const handleSubmit = (formData) => {
        props.dispatch(startAddTicket(formData, props))
    }
        return(
            <div>
                <h2>Create A New Ticket</h2>
                <TicketForm handleSubmit={handleSubmit}/>
            </div>
        )
}

export default connect()(TicketNew)