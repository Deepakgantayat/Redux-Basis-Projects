import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startRemoveContact} from '../actions/contacts'

 function ContactList(props){
    const handleRemove = (id) =>{
        props.dispatch(startRemoveContact(id))
     }
        return(
            <div>
               <h2> Listing All Contacts - {props.contacts.length}</h2>
               <table border ="3">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.contacts.map((contact) =>{
                              return (<tr key ={contact._id}>
                                   <td><Link to ={`/contacts/${contact._id}`}>{contact.name}</Link></td>
                                   <td>{contact.email}</td>
                                   <td>{contact.phone}</td>
                                   <td><Link to = {`/contacts/${contact._id}`}>show</Link>
                                   <button onClick= {() =>{
                                      
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        handleRemove(contact._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <Link to = "/contacts/new">Add New Contact</Link>

            </div>
        )
    }

const mapStateToProps = (state) => {
    return{
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)