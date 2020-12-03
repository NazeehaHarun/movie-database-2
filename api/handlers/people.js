const express = require("express");
const router = express.Router();

const people = require("../functions/people");

const mongoose = require("mongoose");

//let peopleModel= require("././schemaPeople.js")
let peopleModel=require("../../db/schema/schemaPeople")
let User = require("../../db/schema/userSchema");


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
    //const search = people.peopleWithId(person);
    peopleModel.findById(person, function(err,result){
        if (err){
            res.status(400).send("People cannot be found");
            console.log(err.message);
            return;

        } else {
            res.status(200).json({result});
        }
    })
    
})


router.post("/:id/follow", (req, res) => {

    //Implemented for purposes of theoretical business logic - No users actually exist on the system
    
    const userObject = req.session.user;
    const personToFollowObjectId = req.params.id;
    
    let newFollowingUpdate = {followingPeople: personToFollowObjectId};

    User.findByIdAndUpdate(userObject._id, {$push: newFollowingUpdate}, function(err, result) {
        if (err) {
            throw err;
        } else {
            
            const update = {followers: userObject._id}

            peopleModel.findByIdAndUpdate(personToFollowObjectId, {$push: update}, function(err, result) {
                if (err) {
                    throw err;
                } else {
                    
                    res.status(200).send(result);
                    return;
                }
            });
        }

    });

});

module.exports = router; 
