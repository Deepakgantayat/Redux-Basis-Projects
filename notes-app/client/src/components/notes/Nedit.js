import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {startEditNote} from '../actions/notes'
import NoteForm from './Nform'


function NoteEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditNote(formData, props))
    }
        return(
            <div>
                {
                    !_.isEmpty(props.note) &&(
                        <div>
                             <h2> Edit customer - {props.note.title}</h2>
                                {Object.keys(props.note).length !== 0 && <NoteForm {...props.note}
                                handleSubmit = {handleSubmit}/>}
                        </div>
                    )
                }     
            </div>
        )
}

const mapStateToProps = (state, props)=> {
    return {
        note : state.notes.find(note => note._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(NoteEdit)