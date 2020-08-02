const express = require('express')
const router = express.Router()
const contactsController = require('../app/controllers/contactsController')
const usersController = require('../app/controllers/usersController')
const authenticateUser = require('../app/middlewares/authenticater')

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUser,usersController.accounts)
router.delete('/users/logout',authenticateUser,usersController.logout)

router.get('/contacts',authenticateUser,contactsController.list)
router.post('/contacts',authenticateUser,contactsController.create)
router.get('/contacts/:id',authenticateUser,contactsController.show)
router.put('/contacts/:id',authenticateUser,contactsController.update)
router.delete('/contacts/:id',authenticateUser,contactsController.destroy)

module.exports=router