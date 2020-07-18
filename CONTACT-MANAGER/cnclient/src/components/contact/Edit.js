import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {startEditContact} from '../actions/contacts'
import ContactForm from './Form'

function ContactEdit(props){

    const handleSubmit = (formData) => {
        props.dispatch(startEditContact(formData, props))
    }
     
        return(
            <div>
                {
                     !_.isEmpty(props.contact) &&(
                         <div>
                              <h2> Edit Contact - {props.contact.name}</h2>
                                {Object.keys(props.contact).length !== 0 && <ContactForm {...props.contact}
                                handleSubmit = {handleSubmit}/>}
                         </div>
                     )
                }     
            </div>
        )
}
const mapStateToProps = (state, props)=> {
    return {
        contact : state.contacts.find(contact => contact._id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(ContactEdit)