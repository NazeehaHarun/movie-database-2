const express = require("express");
const router = express.Router();

const people = require("../functions/people");

const mongoose = require("mongoose");

//let peopleModel= require("././schemaPeople.js")
let peopleModel=require("../../db/schema/schemaPeople")
let User = require("../../db/schema/userSchema");
const admin = require("../functions/auth");
let Movie = require("../../db/schema/movieSchema");

router.post('/', admin.contributor, (req, res) => {

    const personObj = req.body.person;
    
    const person = people.createPeople(personObj);
    
    peopleModel.findOne({Name: person.Name}).then(foundPerson => {
         
        if (foundPerson) {
            
            res.status(200).send(foundPerson);

        } else {

            let newPerson = new peopleModel(person);
            
            newPerson.save(function(err,result){
                if (err){
                    res.status(400).send("People cannot be added");
                    console.log(err.message);

                } else {
                    res.status(200).json(result);
                    return;
                }
            });
        }

    }).catch(err =>{
        console.log(err);
    });
    
});

// /GET people
router.get('/', (req, res) => {

    const name = req.query.name;
    const searchObject= people.people({name});
    console.log(searchObject);

    peopleModel.find(searchObject)
    .then(foundPerson => {
        if (foundPerson) {

            if (foundPerson.length === 0) {
                res.status(400).send("Person not found");
                return;
            } else {
                res.status(200).send(foundPerson);
                return;

            }
        }
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

// /GET people
router.get('/:person/movies', (req, res) => {

    const personId = req.params.person;

    peopleModel.findById(personId)
    .then(foundPerson => {
        if (foundPerson) {

            if (foundPerson.length === 0) {
                res.status(400).send("Person not found");
                return;
            } else {

                let movieId = foundPerson.pastWorks;


                Movie.find({"_id": movieId}, function(err, result){

                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send(result);
                        return; 
                    }
                });

            }
        }
    })
    

});


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

router.delete("/:id/follow", (req, res) => {

    //Implemented for purposes of theoretical business logic - No users actually exist on the system
    
    const userObject = req.session.user;
    const personToFollowObjectId = req.params.id;
    
    let newFollowingUpdate = {followingPeople: personToFollowObjectId};

    User.findByIdAndUpdate(userObject._id, {$pull: newFollowingUpdate}, function(err, result) {
        if (err) {
            throw err;
        } else {
            
            const update = {followers: userObject._id}

            peopleModel.findByIdAndUpdate(personToFollowObjectId, {$pull: update}, function(err, result) {
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
