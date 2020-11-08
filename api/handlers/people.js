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

// /GET people
router.get('/', (req, res) => {

    const name = req.query.name;
    const searchedPeople = people.getPeople({name});

    if (searchedPeople !== null) {
        res.status(200).json({searchedPeople});
        return;
    }

    //Returns a response of bad request if movie is not found
    res.sendStatus(400);
});

router.get('/:person', (req, res) => {
    const person = req.params.person;
    const search = people.getPeopleWithId(person);

    if (search !== null) {
        res.status(200).json({search});
        return;
    }

    res.status(400); 
})

module.exports = router; 
