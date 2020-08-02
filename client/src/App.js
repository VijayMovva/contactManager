import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar,Nav,NavItem} from 'react-bootstrap'

import Home from './components/common/home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import {startRemoveUser} from './actions/userActions'

import ContactList from './components/contacts/contactList'
import swal from 'sweetalert'
import Switch from 'react-bootstrap/esm/Switch'

    function App(props) {
     console.log(props.user)
    return (
        <div>
            <BrowserRouter>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand>Contact Manager</Navbar.Brand>
                <Nav className='ml-auto'>
                <NavItem>
                <Link to='/'>Home</Link> |
                </NavItem>
                {
                    (Object.keys(props.user).length !== 0) && (
                        <NavItem>
                        <Link to='/contacts'>Contacts</Link> |
                        </NavItem>
                    )
                }


                {   (Object.keys(props.user).length === 0) ? (
                        <React.Fragment>
                        <NavItem>
                        <Link to='/users/register'>Register</Link> |
                        </NavItem>
                        <NavItem>
                        <Link to='/users/login'>Login</Link> 
                        </NavItem>
                        </React.Fragment>
                    ): (
                        <React.Fragment>
                        <NavItem>
                         <Link to='#' onClick={()=>{
                             swal({
                                 title : 'Are you sure you want to logout?',
                                 icon : 'warning',
                                 buttons : true,
                                 dangerMode : true
                             })
                             .then((willDelete)=>{
                                 if(willDelete){
                                     swal('successfully logged out',{
                                         icon: 'success'
                                     })
                                     props.dispatch(startRemoveUser())
                                 }
                             })
                         }}>logout
                         </Link>
                         </NavItem>   
                        </React.Fragment>
                    )
                }
                </Nav>
                </Navbar>
                <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/users/register' component={Register}/>
                <Route path='/users/login' component={Login}/>
                <Route path='/contacts' component={ContactList}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(App)