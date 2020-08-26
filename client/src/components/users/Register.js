import React from 'react'
import {connect} from 'react-redux'
import {startAddUser} from '../../actions/userActions'

class Register extends React.Component{
    constructor(props){
        super()
        this.state = {
            username: '',
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const registerData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password   
        }
        const redirect = () => this.props.history.push('/users/login')
        this.props.dispatch(startAddUser(registerData,redirect))
        
    }

    render(){
        return(
           
            <div className="row">
                        <div className='col-md-6 offset-md-3'>
                            <h2>Register</h2>
                            <form onSubmit={this.handleSubmit}>

                                <div className='form-group'>
                                <label htmlFor='username'>UserName</label>
                                <input placeholder='Enter Username' name="username" id='username' type='text' value={this.state.username} onChange={this.handleChange} className='form-control' />
                                </div>

                                <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input placeholder='Enter Email' name="email" id='email' type='text' value={this.state.email} onChange={this.handleChange} className='form-control' />
                                </div>

                                <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input placeholder='Password' name='password' type='password' value={this.state.password} onChange={this.handleChange} id='password' className='form-control' />
                                </div>

                                <input type='submit' className='btn btn-primary' />
                            </form>
                    </div>
                    </div>
        )
    }
}

export default connect()(Register)