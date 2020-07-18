import React from 'react'
import NoteForm from './Nform'
import {connect} from 'react-redux'
import {startAddNote} from '../actions/notes'


function NoteNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddNote(formData, props))
    }
        return(
            <div>
                <h2>Create New Note</h2>
                <NoteForm handleSubmit = {handleSubmit}/>
            </div>
        )
}

export default connect()(NoteNew)