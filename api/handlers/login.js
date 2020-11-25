const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../db/schema/userSchema");

const auth = require("../functions/login");

router.post("/login", (req, res) => {
    
    if (req.session.loggedIn) {
        res.status(200).send("User Already Logged In");
        return;
    }

    const userObject = req.body.user;
    const user = auth.loginUser(userObject);

    if (user !== null) {

        User.findOne({userName: user.username})
        .then(foundUser => {
            
            if (!foundUser) {
                res.status(400).send("User Not Found");
                return;
            
            } 

            bcrypt.compare(user.password, foundUser.password)
            .then(match => {
                if (!match) {
                    res.status(401).send("Invalid Credentials"); 
                    return;
                } else {
                    
                    req.session.loggedIn = true; 
                    req.session.user = foundUser;
                    res.status(200).json(foundUser);
                    return; 

                }
                
            });
        });
        
    } else {
        res.status(400).send("Invalid Input: Please enter all fields"); 
    }
    

});

router.get("/logout", (req, res, next) => {

    if (!req.session.loggedIn) {
        res.status(200).send("user is not logged in");
    } else {
        req.session.loggedIn = false;
        req.session.user = null; 
        res.status(200).send("User successfully logged out");
    }

    return;

});

module.exports = router;