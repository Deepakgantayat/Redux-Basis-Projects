import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'

 function NoteShow(props){
        console.log(props.note)
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
        return(
            <div>
                {
                    !_.isEmpty(props.note) &&(
                        <div>
                            <h2>{props.note.title} - {props.note.body} - {props.note.category.name}</h2>\
                            <Link to = {`/notes/edit/${id}`}> Edit</Link>
                            <Link to = "/notes">  back</Link>
                        </div>
                    )
                }  
            </div>
        )
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find(note => note._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(NoteShow)