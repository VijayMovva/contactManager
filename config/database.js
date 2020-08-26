const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect(`mongodb+srv://VijayMovva:Vijay@1997@cluster0.r4zxl.mongodb.net/<dbname>?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = connectDB