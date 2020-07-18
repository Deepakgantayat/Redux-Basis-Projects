import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startRemoveNote} from '../actions/notes'

function NoteList (props){
    const handleRemove = (id) =>{
        props.dispatch(startRemoveNote(id))
     }
        return(
            <div>
               <h2> Listing Notes - {props.notes.length}</h2>
               <table border ="3">
                   <thead>
                       <tr>
                           <th>Title</th>
                           <th>Body</th>
                           <th>Category</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.notes.map((note) =>{
                              return (<tr key ={note._id}>
                                   <td><Link to ={`/notes/${note._id}`}>{note.title}</Link></td>
                                   <td>{note.body}</td>
                                   <td>{note.category.name}</td>
                                   <td><Link to = {`/notes/${note._id}`}>show</Link>
                                   <button onClick= {() =>{
                                      
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        handleRemove(note._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <Link to = "/notes/new">Add New Note</Link>

            </div>
        )
    }


const mapStateToProps = (state) =>{
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps)(NoteList)