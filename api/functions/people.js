const {v4: uuidv4} = require("uuid")

const people= require("../../db/people-data.json");

const createPeople = (personObj) => {

    if (personObj === null) {
        return null;
    }

    let newPerson = null;
    
    //Ensure person does not already exist
    for (person of people) {
        if (person.Name == personObj.name) {
            newPerson = person;
        }
    }

    if (newPerson !== null) {
        return null;
    }
    
    newPerson = {
        id: uuidv4(),
        name: personObj.name,
        pastWorks: personObj.pastWorks,
        roles: "Actor",
    }

    return newPerson; 

};

const getPeople = (searchParameters) => {
   
    
    let peopleList = [];

    //If no parameters were supplied --> Return all the movies
    if (!searchParameters.name) {
        people.forEach(person => {
            peopleList.push(person);
        });

        return peopleList;
    }

    people.forEach(person => {

        if (searchParameters.name !== undefined) {
            if (JSON.stringify(person.Name).toLowerCase() === JSON.stringify(searchParameters.name).toLowerCase()) {
                peopleList.push(person); 
            }
          
        } 

    });

    return peopleList;
};

const getPeopleWithId = (peopleId) => {
    //console.log("inside get people id");
    let p = null;
    people.forEach(person => {
        if (person.hasOwnProperty("id")) {
            if(person.id === peopleId) {
                //console.log("found people id");
                p=person;
                return;
            }
        }
    });
  
    return p;
    

}

module.exports = {
    createPeople, getPeople, getPeopleWithId
}