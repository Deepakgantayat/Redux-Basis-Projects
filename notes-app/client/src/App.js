import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'

import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'

import CategoryList from './components/category/List'

import NoteList from './components/notes/Nlist'
import NoteShow from './components/notes/Nshow'
import NoteNew from './components/notes/Nnew'
import NoteEdit from './components/notes/Nedit'

import {startLogoutUser} from './components/actions/user'

function App(props) {
  const handleLogout = () => {
    props.dispatch(startLogoutUser())
   }

  return (
    <BrowserRouter>
    <div>
      <h1>NOTES APP </h1>
      <ul>
        <li><Link to = "/">Home</Link></li>
        {
          !_.isEmpty(props.user) ?(
            <div>
              <li><Link to = "/categories">Category</Link></li>
              <li><Link to = "/notes">Notes</Link></li>
              <li><Link to = "/users/account">Account</Link></li>
             <li><Link to ="#" onClick= {handleLogout}>Logout</Link></li>
          
            </div>
          ): (
            <div>
              <li><Link to = "/users/register">Register</Link></li>
              <li><Link to = "/users/login">Login</Link></li>
            </div>
             )
          }
      </ul>


      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/users/register" component = {Register}/>
      <Route path = "/users/login" component = {Login}/>
      <Route path = "/users/account" component = {Account}/>
    

      <Route path = "/categories" component = {CategoryList}/>

      <Route path = "/notes" component = {NoteList} exact={true}/>
      <Route path = "/notes/new" component = {NoteNew}/>
      <Route path = "/notes/edit/:id" component = {NoteEdit}/>
      <Route path = "/notes/:id" component = {NoteShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state,props) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)
