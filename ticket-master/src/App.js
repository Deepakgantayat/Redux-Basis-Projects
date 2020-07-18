import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import {setUser} from './actions/user'
import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerNew from './components/customers/New'
import CustomerEdit from './components/customers/Edit'

import EmployeeList from './components/employees/List'
import EmployeeShow from './components/employees/Show'
import EmployeeNew from './components/employees/Enew'
import EmployeeEdit from './components/employees/Edit'

import DepartmentList from './components/department/Dlist'
import DepartmentEdit from './components/department/Edit'

import TicketList from './components/ticket/Tlist'
import TicketNew from './components/ticket/Tnew'
import TicketShow from './components/ticket/Tshow'

import {startLogoutUser} from './actions/user'

function App(props) {
  const handleLogout = () => {
   props.dispatch(startLogoutUser())
  }

  return (
    <BrowserRouter>
    <div className="container-fluid">
    <nav className="navbar">
      <h1> Ticket Master</h1>
      <ul class="nav justify-content-end">
        <li class="nav-item"><Link   class="nav-link active" to = "/">Home</Link></li>
        {
          !_.isEmpty(props.user) ?(
            <div>
              <li class="nav-item"><Link  class="nav-link" to = "/customers">Customers</Link></li>
              <li class="nav-item"><Link class="nav-link" to = "/employees">Employees</Link></li>
              <li class="nav-item"><Link class="nav-link" to = "/departments">Department</Link></li>
              <li class="nav-item"><Link class="nav-link" to = "/tickets">Ticket</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/users/account">Account</Link></li>
              <li class="nav-item"><Link class="nav-link" to ="#" onClick= {handleLogout}>Logout</Link></li>
            </div>
          ): (
            <div>
              <li><Link to = "/users/register">Register</Link></li>
        <li><Link to = "/users/login">Login</Link></li>
            </div>
          )
        }
        </ul>
        </nav>


      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path ="/users/register" component = {Register}/>
      <Route path ="/users/login" component = {Login}/>
      <Route path = "/users/account" component = {Account}/>

      <Route path = "/customers" component={CustomerList} exact={true}/>
      <Route path = "/customers/new" component = {CustomerNew}/>
      <Route path="/customers/edit/:id" component={CustomerEdit}/>
      <Route path = "/customers/:id" component={CustomerShow}/>
      

      <Route path ="/employees" component = {EmployeeList} exact={true} />
      <Route path = "/employees/new" component = {EmployeeNew}/>
      <Route path = "/employees/edit/:id" component = {EmployeeEdit}/>
      <Route path = "/employees/:id" component = {EmployeeShow}/>

      <Route path= "/departments" component = {DepartmentList}/>
      <Route path= "/departments/:id" component = {DepartmentEdit}/>

      <Route path= "/tickets" component = {TicketList} exact={true}/>
      <Route path= "/tickets/new" component = {TicketNew}/>
      <Route path= "/tickets/:id" component = {TicketShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state,props) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)
