var express = require('express'),
    userRoute = express.Router(),
    users = require('../models/users');

var route = () => {

    // get all users
    userRoute.get("/users", (req, res) => {
        users.find((err, val) => {
            if(err){
                res.status(400).send({
                    message : "unable to list user", status : 400
                })
            }
            res.status(200).send({
                message : "users listing",
                status : 200,
                val
            })
        })
    })

    // get a single user data with their _id
    userRoute.get("/user/:id", (req, res) => {
        users.findOne({ _id : req.params.id}, (err, val) => {
            if(err){
                res.status(400).send({
                    message : "unable to list user", status : 400
                })
            }
            res.status(200).send({
                message : "user details",
                status : 200,
                val
            })
        })
    })

    // Create a new user
    userRoute.post("/user", (req, res) => {
        user = new users({
            name : req.body.name,
            email : req.body.email
        });
        user.save((err, result) => {
            if(err){
                res.status(400).send({
                    message : "unable to create user", status : 400
                })
            }
            res.status(200).send({
                message : "user created successfully", status : 200, result
            })
        })
    })

    // Update the details of an user
    userRoute.patch("/user/:id", (req, res) => {
        // userData = Object.keys(req.body)
        // userData.map((data, i) => {
        //     console.log(req.body[data])
        // })
        users.findOneAndUpdate({ _id : req.params.id}, req.body, { new :true }, (err, result) => {
            if(err){
                res.status(400).send({
                    message : "unable to update user", status : 400
                })
            }
            res.status(200).send({
                message : "user updated successfully", status : 200, result
            })
        })        
    })

    // delete a single user with _id
    userRoute.delete("/user/:id", (req, res) => {
        users.findOneAndDelete({ _id : req.params.id}, (err, result) => {
            if(err){
                res.status(400).send({
                    message : "unable to delete user", status : 400
                })
            }
            res.status(200).send({
                message : "user deleted successfully", status : 200, result
            })
        })
    })

    return userRoute;

}

module.exports = route;