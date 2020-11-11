const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid");
const { use } = require("../handlers/users");

const users= require("../../db/users-data.json"); 

const registerUser = (user) => {

    //Need to check if all appropriate fields have been entered in 
    if (!user.username || !user.password) {
        return null;
    }

    //Checking unique usernames and ensuring user does not already exist in database

    let userObj = null; 

    users.forEach(userInstance => {
       
        if (user.username === userInstance.userName) {
            userObj = userInstance;
        }
    })

    if (userObj !== null) {
        return null;
    }

    let password = user.password;

    const newUser = {
        id: uuidv4(),
        username: user.username,
        password: password,
        type: "regular"
    }

    return newUser;
    
}

const followUser = (user, userToFollow) => {

    if (user === null || userToFollow === null) {
        return false;
    }

    user.following.push(userToFollow);
    user.follwers.push(user);
    return true;

};

const user = (searchParameters) => {
    
    let userList = [];

    //If no parameters were supplied --> Return all the movies
    if (!searchParameters.name) {
        users.forEach(person => {
            userList.push(person);
        });

        return userList;
    }

    users.forEach(person => {

        if (searchParameters.name !== undefined) {
            if (JSON.stringify(person.userName).toLowerCase() === JSON.stringify(searchParameters.name).toLowerCase()) {
                userList.push(person); 
            }
          
        } 

    });

    return userList;
};

const userWithId = (userId) => {
    let p = null;
    users.forEach(person => {
        if (person.hasOwnProperty("id")) {
            if(person.id === userId) {
                p = person;
                return;
            }
        }
    });

    return p; 

}


module.exports = {
    registerUser, 
    followUser,
    user,
    userWithId,
   
}