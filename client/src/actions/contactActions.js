import axios from '../config/axios'
import swal from 'sweetalert'

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

export const editContact = (contact) => {
    return {
        type : 'EDIT_CONTACT',
        payload : contact
    }
}

export const deleteContact = (id) => {
    return {
        type : 'DELETE_CONTACT',
        payload : id
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

export const startContactDelete = (id) => {
    return (dispatch) => {
        axios.delete(`/contacts/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            dispatch(deleteContact(id))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startEditContact = (contactData,id) => {
    return (dispatch) => {
        axios.put(`/contacts/${id}`, contactData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            swal({
                title: "Edited!",
                text: `${contactData.name} contact has been Edited! You can close the Modal`,
                type: "success",
                })
            dispatch(editContact(response.data))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}