require('dotenv').config()
var mongoose = require('mongoose')

mongoose.connect(`${process.env.DB_URL}:${process.env.DB_POST}/${process.env.DB_NAME}`, 
    { 
        useNewUrlParser : true,
        useUnifiedTopology : true
    }, (err, res) => {
        if(err) {
            console.log("DB Connection Error")
        } else {
            console.log("DB Connected")
        }
})