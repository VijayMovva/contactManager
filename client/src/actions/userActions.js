import axios from '../config/axios'
import swal from 'sweetalert'

export const setUser = (user) => {
    return {
        type : 'SET_USER',
        payload : user
    }
}

export const removeUser = () => {
    return {
        type : 'REMOVE_USER'
    }
}

export const startSetUser = (loginData,redirect) => {
    return (dispatch) => {
        axios.post('/users/login', loginData)
        .then(response=>{
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)
            }else{
                swal('succesfully logged in', '' ,'success')
                localStorage.setItem('authToken', response.data.token)
                dispatch(setUser(response.data.user))
                redirect()
                window.location.reload()
            }
        })
    }
}

export const startAddUser = (registerData,redirect) => {
    return (dispatch) => {
        axios.post('/users/register', registerData)
        .then((response)=>{
            if(response.data.errors){
                swal(`${response.data.message}`,'','error')
            }else{
                swal('succesfully registered', '' ,'success')
                redirect()
            }
        })
    }
}

export const startRemoveUser = () => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.errors){
            swal(`${response.data.message}`,'','error')
            }else{
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                window.location.href='/'
            }
        })
    }
}