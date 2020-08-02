const User = require('../models/user')
const _ = require('lodash')

module.exports.register = (req, res) => {
    // serialize request objects / inputs
    const body = _.pick(req.body, ['username','email','password'])
    const user = new User(body)
    user.save()
        .then((user)=>{
            // const {_id, username, email} = user
            // res.json({_id, username, email})
            // serialize response object / output
            res.json(_.pick(user, ['_id', 'username', 'email']))
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.login = (req, res) => {
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then( (user) => {
           return user.tokenGenerator()
        })
        .then(function(token){
            //res.setHeader('x-auth', token).json({})
            res.json({token})
        })
        .catch( (err) => {
            res.json(err)
        })
}

module.exports.accounts = (req, res) => {
    const {_id, username, email} = req.user
    res.json({_id, username, email})
}

module.exports.logout = (req, res) => {
    const {user,token } = req
    User.findByIdAndUpdate(user._id, {$pull : {tokens: {token : token}}})
        .then(()=>{
            res.json({notice : 'successfully logged out'})
        })
        .catch((err)=>{
            res.json(err)
        })
}