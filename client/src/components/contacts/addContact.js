import React from 'react'
import {connect} from 'react-redux'
import { startAddContact } from '../../actions/contactActions'

class AddContact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            mobile : '',
            category : '',
            personalCategory: ''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const contactData={
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            category : this.state.category,
            personalCategory : this.state.personalCategory
        }
        console.log(contactData)
        this.props.dispatch(startAddContact(contactData))
    }

    render(){
        return(
            <div className="row">
                    <div className='col-md-12'>
                            <h2>ADD CONTACT</h2>
                            <form onSubmit={(e)=>this.handleSubmit(e)}>

                                <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <input placeholder='Enter name' name="name" id='name' type='text' value={this.state.name} onChange={this.handleChange} className='form-control' />
                                </div>

                                <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input placeholder='Enter Email' name="email" id='email' type='text' value={this.state.email} onChange={this.handleChange} className='form-control' />
                                </div>

                                <div className='form-group'>
                                <label htmlFor='mobile'>Mobile Number</label>
                                <input placeholder='Enter mobile number' name='mobile' type='text' value={this.state.mobile} onChange={this.handleChange} id='mobile' className='form-control' />
                                </div>

                                <label>Category</label>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="category" id="work" value="work" checked={this.state.category==='work'} required={true} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="work">
                                Work
                                </label>
                                </div>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="category" id="home" value="home" checked={this.state.category==='home'} required={true} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="home">
                                Home
                                </label>
                                </div>

                                <label>Personal-Category</label>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="personalCategory" id="family" value="family" checked={this.state.personalCategory==='family'} required={true} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="family">
                                Family
                                </label>
                                </div>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="personalCategory" id="friends" value="friends" checked={this.state.personalCategory==='friends'} required={true} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="friends">
                                Friends
                                </label>
                                </div>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="personalCategory" id="others" value="others" checked={this.state.personalCategory===
                                'others'} required={true} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="others">
                                Others
                                </label>
                                </div>

                                <input type='submit' className='btn btn-primary' />
                            </form>
                    </div>
            </div>
        )
    }
}

export default connect()(AddContact)