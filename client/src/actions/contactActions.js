import axios from '../config/axios'

export const setContacts = (contacts) => {
    return {
        type : 'CONTACTS_LIST',
        payload : contacts
    }
}

export const addContact = (contact) => {
    return {
        type : 'ADD_CONTACT',
        payload : contact
    }
}

export const startSetContacts = () => {
    return (dispatch) => {
        axios.get('/contacts', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const contacts = response.data
            dispatch(setContacts(contacts))
        })
        .catch((err)=>{
            alert(err)
        })
    }
} 

export const startAddContact = (contactData) => {
    return (dispatch) => {
        axios.post('/contacts', contactData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contact = response.data.contact
            dispatch(addContact(contact))
        })
    }
}