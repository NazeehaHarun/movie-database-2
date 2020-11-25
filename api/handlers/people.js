const express = require("express");
const router = express.Router();

const people = require("../functions/people");

const mongoose = require("mongoose");

//let peopleModel= require("././schemaPeople.js")
let peopleModel=require("../../db/schema/schemaPeople")


router.post('/', (req, res) => {

    const personObj = req.body.person;
    //personObj.Role = "actor";
    console.log(personObj); 
    const person = people.createPeople(personObj);
    let newPerson = new peopleModel(person);
    newPerson.save(function(err,result){
        if (err){
            res.status(400).send("People cannot be added");
            console.log(err.message);

        }
        res.status(200).json({result});

    });
    
});

// /GET people
router.get('/', (req, res) => {

    const name = req.query.name;
    //const searchedPeople = people.people({name});
    peopleModel.findOne({"Name": name.toLowerCase()},function(err,result){
        if (err){
            res.status(400).send("People cannot be found");
            console.log(err.message);

        }
        res.status(200).json({result});
    })
    

});

router.get('/:person', (req, res) => {
    const person = req.params.person;
    const search = people.peopleWithId(person);
    peopleModel.findOne({"id": person},function(err,result){
        if (err){
            res.status(400).send("People cannot be found");
            console.log(err.message);

        }
        res.status(200).json({result});
    })
    
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
