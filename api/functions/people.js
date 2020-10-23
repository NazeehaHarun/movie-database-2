const {v4: uuidv4} = require("uuid")

const createPeople = (personObj) => {

    const newPerson = {
        id: uuidv4(),
        name: personObj.name,
        pastWorks: personObj.pastWorks,
        roles: "Actor",
    }

    return newPerson; 

};

module.exports = {
    createPeople
}