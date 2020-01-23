require('dotenv').config()

var express = require('express'),
    app = express(),
    db = require('./db'),
    bodyParser = require('body-parser'),
    userRoute = require('./routes/userRoute')();

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Credentials",false);
    res.setHeader("Access-Control-Allow-Methods","GET, PUT, PATCH, DELETE, POST");
    next();
});

// app.use(express.json())
app.use(userRoute)

app.all("/", (req, res) => {
    res.status(404).send({
        message : "No route found here.",
        status : 404
    })
})

app.listen(process.env.PORT, () => {
    console.log("App started")
})