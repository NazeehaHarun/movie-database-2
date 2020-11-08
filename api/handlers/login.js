const express = require("express");
const router = express.Router();

const auth = require("../functions/login");

router.post("/login", (req, res) => {
    
    if (req.session.loggedIn) {
        res.status(200).send("User Already Logged In");
        return;
    }

    const userObject = req.body.user;
    const user = auth.loginUser(userObject);
    
    if (user !== null) {
        req.session.loggedIn = true; 
        req.session.user = user;
        res.status(200).json(user);
        return; 
    }

    res.status(401).send("Invalid Credentials"); 

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