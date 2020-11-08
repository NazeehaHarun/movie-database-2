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

const getUser = (searchParameters) => {
    
    let userList = [];

    //If no parameters were supplied --> Return all the movies
    if (!searchParameters.name) {
        users.forEach(user => {
            userList.push(user);
        });

        return userList;
    }

    users.forEach(user => {

        if (searchParameters.name !== undefined) {
            if (JSON.stringify(user.userName).toLowerCase() === JSON.stringify(searchParameters.name).toLowerCase()) {
                userList.push(user); 
            }
          
        } 

    });

    return userList;
};

const getUserWithId = (userId) => {
    let p = null;
    users.forEach(user => {
        if (user.hasOwnProperty("id")) {
            if(user.id === userId) {
                p = user;
                return;
            }
        }
    });

    return p; 

}


module.exports = {
    registerUser, 
    followUser,
    getUser,
    getUserWithId,
}