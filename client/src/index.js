import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/axios'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { setUser } from './actions/userActions'
import {startSetContacts} from './actions/contactActions'



const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    axios.get('/users/accounts',{
        headers : {
            'x-auth' : localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const user = response.data
        store.dispatch(setUser(user))
        store.dispatch(startSetContacts())
    })
    .catch((err)=>{
        console.log(err)
    })
}

ReactDOM.render(<Provider store={store} > <App /> </Provider> , document.getElementById('root'))

