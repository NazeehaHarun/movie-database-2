const express = require("express");
const router = express.Router();

const people = require("../functions/people");

router.post('/', (req, res) => {

    const personObj = req.body.person;
    console.log(personObj); 
    const person = people.createPeople(personObj);

    if (person !== null) {
        res.status(200).json({person});
        return;

    } else {

        res.status(400).send("Person already exists");
        return;
    }
    
});

// /GET people
router.get('/', (req, res) => {

    const name = req.query.name;
    const searchedPeople = people.people({name});

    if (searchedPeople !== null) {
        res.status(200).json({searchedPeople});
        return;
    }

    //Returns a response of bad request if movie is not found
    res.sendStatus(400);
});

router.get('/:person', (req, res) => {
    const person = req.params.person;
    const search = people.peopleWithId(person);

    if (search !== null) {
        res.status(200).json({search});
        return;
    }

    res.status(400); 
})


router.post("/:id/follow", (req, res) => {

    //Implemented for purposes of theoretical business logic - No users actually exist on the system
    
    const userObject = req.session.user;
    const peopleToFollowObject = req.body.people;

    if (people.followUser(userObject, peopleToFollowObject) !== false) {
        res.status(200).json(userObject.followers);
        return;
    }
    
    res.status(400);

});

module.exports = router; 
