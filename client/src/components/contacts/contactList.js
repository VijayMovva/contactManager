import React from 'react'
import {Row, Col, Container, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import AddContact from './addContact'


class ContactList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contacts : this.props.contacts
        }
        
    }

      componentDidUpdate(prevProps,prevState) {
          console.log('prevProps', prevProps)
          console.log('prevState', prevState)

       }

    handleAllContacts = () => {
        console.log('clicked')
        this.setState({
            contacts : this.props.contacts
        })
    }

    handleFamilyContacts = () => {
        console.log('clicked')
        this.setState({
            contacts : this.props.contacts.filter(contact => contact.personalCategory === 'family' )
        })
    }

    handleFriendsContacts = () => {
        console.log('clicked')
        this.setState({
            contacts : this.props.contacts.filter(contact => contact.personalCategory === 'friends' )
        })
    }

    handleOthersContacts = () => {
        console.log('clicked')
        this.setState({
            contacts : this.props.contacts.filter(contact => contact.personalCategory === 'others' )
        })
    }

    render(){
        console.log('renderProps',this.props)

        return(

            <React.Fragment>
                <Container>
                    <Row>
                        <Col className='col-lg-2'>
                            <Card style={{ width: '18rem' }}>
                             <Card.Header>Filter Contacts</Card.Header>   
                            <ListGroup variant="flush">

                            <ListGroup.Item><Button onClick={this.handleAllContacts}>All Contacts - {this.props.contacts.length}</Button> </ListGroup.Item>

                            <ListGroup.Item><Button onClick={this.handleFamilyContacts}>Family Contacts</Button> </ListGroup.Item>

                            <ListGroup.Item><Button onClick={this.handleFriendsContacts}>Friends Contacts</Button> </ListGroup.Item>

                            <ListGroup.Item><Button onClick={this.handleOthersContacts}>Others Contacts</Button> </ListGroup.Item>
 
                            </ListGroup>
                            </Card>
                        </Col>
                        <Col className='col-lg-5 offset-lg-2'>
                            <ul>
                                {
                                    (this.state.contacts.length === 0) ? (
                                        this.state.contacts.map((contact)=>{
                                            return (
                                                <li style={{listStyleType:'none'}} key={contact._id}>
                                                    <Card className='mb-2' border={(contact.personalCategory==='family' && 'primary') || (contact.personalCategory==='friends' && 'danger') || (contact.personalCategory==='others' && 'info')} style={{ width:'18rem'}}>
                                                    <Card.Body>
                                                    <p>Name - {contact.name}</p>
                                                    <p>Email - {contact.email}</p>
                                                    <p>Mobile - {contact.mobile}</p>
                                                    <p>Category - {contact.category}</p>
                                                    <p>Personal - {contact.personalCategory}</p>
                                                    <footer>
                                                    <Row>
                                                        <Col className='col-lg-4 offset-lg-2'>
                                                           <Button> Edit </Button>
                                                        </Col>
                                                        <Col className='col-lg-3'>
                                                            <Button variant='danger'> Delete </Button>
                                                        </Col>
                                                    </Row>
                                                    </footer>
                                                    </Card.Body>
                                                    </Card>
                                                    <br/>
                                                </li>
                                                 )
                                                })
                                          ) : (
                                this.state.contacts.map((contact)=>{
                                    return (
                                        <li style={{listStyleType:'none'}} key={contact._id}>
                                            <Card className='mb-2' border={(contact.personalCategory==='family' && 'primary') || (contact.personalCategory==='friends' && 'danger') || (contact.personalCategory==='others' && 'info')} style={{ width:'18rem'}}>
                                            <Card.Body>
                                            <p>Name - {contact.name}</p>
                                            <p>Email - {contact.email}</p>
                                            <p>Mobile - {contact.mobile}</p>
                                            <p>Category - {contact.category}</p>
                                            <p>Personal - {contact.personalCategory}</p>
                                            <footer>
                                            <Row>
                                                <Col className='col-lg-4 offset-lg-2'>
                                                   <Button> Edit </Button>
                                                </Col>
                                                <Col className='col-lg-3'>
                                                    <Button variant='danger'> Delete </Button>
                                                </Col>
                                            </Row>
                                            </footer>
                                            </Card.Body>
                                            </Card>
                                            <br/>
                                        </li>
                                    )
                                })
                                )
                                }
                            </ul>
                        </Col>
                        <Col className='col-lg-3'>
                            <AddContact />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contacts : state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)