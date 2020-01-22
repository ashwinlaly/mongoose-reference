require('dotenv').config()

var express = require('express'),
    app = express(),
    db = require('./db'),
    userRoute = require('./routes/userRoute')();

app.use(express.json())
app.use(userRoute);

app.all("/", (req, res) => {
    res.status(404).send({
        message : "No route found here.",
        status : 404
    })
})

app.listen(process.env.PORT, () => {
    console.log("App started")
})