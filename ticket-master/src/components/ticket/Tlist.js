import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startRemoveTickets} from '../../actions/tickets'

function TicketList(props){
    
        return(
            <div className="row">
                <h2>Listing All Tickets</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Code No</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Message</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.tickets.map((ticket) =>{
                                return(<tr key={ticket._id}>
                                        <td>{ticket.code}</td>
                                        <td>{ticket.customer}</td>
                                        <td>{ticket.department}</td>
                                        <td>{ticket.employee}</td>
                                        <td>{ticket.message}</td>
                                        <td>{ticket.priority}</td>
                                        <td><Link to={`/tickets/${ticket._id}`}>Show</Link></td>

                                </tr>)
                            })
                        }
                    </tbody>
                </table>

                <Link to = "/tickets/new">Add New Ticket</Link>
            </div>
        )
}
const mapStateToProps = (state) =>{
    return{
        tickets : state.tickets
    }
}
export default connect(mapStateToProps)(TicketList)