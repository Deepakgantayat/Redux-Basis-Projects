import React from 'react'
import CategoryForm from './Form'
import {connect} from 'react-redux'
import {startAddCategories} from '../actions/categories'
import {startRemoveCategory} from '../actions/categories'

function CategoryList(props){
    const handleSubmit = (formData) => {
        props.dispatch(startAddCategories(formData, props))
    }   
    const handleRemove = (id) =>{
        props.dispatch(startRemoveCategory(id))
     }     
            return(
                <div>
                    <h2> Listing categories-{props.categories.length}</h2>
                    <table border ="3">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.categories.map((category) =>{
                              return (<tr key ={category._id}>
                                   <td>{category.name}</td>
                                   <td>
                                   <button onClick= {() =>{
                                      
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        handleRemove(category._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>

                    <CategoryForm handleSubmit = {handleSubmit}/>
                </div>
            )
        }

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(CategoryList)