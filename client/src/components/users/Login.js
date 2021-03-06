import React from 'react'
import {connect} from 'react-redux'
import {startSetUser} from '../../actions/userActions'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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
        console.log(this.state)
        const redirect = () => this.props.history.push('/')
        this.props.dispatch(startSetUser(this.state,redirect))
    }

    render(){
        return(
            <div className="row">
                        <div className='col-md-6 offset-md-3'>
                            <h2>Login</h2>
                            <form onSubmit={this.handleSubmit}>
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

export default connect()(Login)