const express = require("express");
const router = express.Router();

const people = require("../functions/people");

router.post('/', (req, res) => {

    const personObj = req.body.person; 
    const person = people.createPeople(personObj);

    if (person !== null) {
        res.status(200).json({person});
        return;
    } 

    res.status(400);
    
});

module.exports = router; 
