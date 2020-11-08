const {v4: uuidv4} = require("uuid")

const people=[{"Role":"Director","Name":"Joe Johnston", "id":"1"},
{"Role":"Writer","Name":"Jonathan Hensleigh","id":"2"},
{"Role":"Writer","Name":"Greg Taylor", "id":"3"},
{"Role":"Writer", "Name": "Jim Strain", "id":"4"},
{"Role":"Actors", "Name":"Robin Williams","id":"5"},
{"Role":"Actors", "Name":"Jonathan Hyde","id":"6"},
{"Role":"Actors", "Name":"Kirsten Dunst","id":"7"},
{"Role":"Actors","Name":"Bradley Pierce", "id":"8"}]

const createPeople = (personObj) => {

    const newPerson = {
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
    

    //console.log("not found people id"); 
    return p;
    

}

module.exports = {
    createPeople, getPeople, getPeopleWithId
}