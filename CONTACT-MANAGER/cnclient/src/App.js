import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'


import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import {startLogoutUser} from './components/actions/users'

import ContactList from './components/contact/List'
import ContactShow from './components/contact/Show'
import ContactNew from './components/contact/New'
import ContactEdit from './components/contact/Edit'

function App(props) {
  const handleLogout = () => {
    props.dispatch(startLogoutUser())
   }
  return (
    <BrowserRouter>
    <div>
      <h1>CONTACT MANAGER </h1>
      <ul>
        <li><Link to = "/">Home</Link></li>
        
        {
          !_.isEmpty(props.user) ?(
            <div>
              <li><Link to = "/contacts">Contacts</Link></li>
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
     

      <Route path = "/contacts" component = {ContactList} exact = {true}/>
      <Route path = "/contacts/new" component = {ContactNew}/>
      <Route path = "/contacts/edit/:id" component = {ContactEdit}/>
      <Route path = "/contacts/:id" component = {ContactShow}/>
     
      </Switch>
    </div>
    </BrowserRouter>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)
