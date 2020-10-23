const express = require("express");
const router = express.Router();

const users = require("../functions/users");

router.post("/", (req, res) => {

    const userObject = req.body.user; 
    const createdUser = users.registerUser(userObject);

    if (createdUser !== null) {
        res.status(200).json(createdUser);
        return;
    }
    
    res.status(400);
});

router.post("/id/follow", (req, res) => {

    //Implemented for purposes of theoretical business logic - No users actually exist on the system

    const userObject = req.body.user;
    const userToFollowObject = req.body.otherUser;

    if (users.followUser(userObject, userToFollowObject) !== false) {
        res.status(200).json(userObject.followers);
        return;
    }
    
    res.status(400);

})

module.exports = router;