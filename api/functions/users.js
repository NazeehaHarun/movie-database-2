const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid")

const users=[{"Type":"Contributing","userName":"David", "id":"1"},
{"Type":"Regular","userName":"Nazeeha","id":"2"},
{"Type":"Contributing","userName":"Micheal", "id":"3"},
{"Type":"Contributing", "userName": "John", "id":"4"},
{"Type":"Regular", "userName":"Rob","id":"5"},
{"Type":"Contributing", "userName":"Jon","id":"6"},
{"Type":"Regular", "userName":"Jordon","id":"7"},
{"Type":"Regular","userName":"Brad", "id":"8"}]

const registerUser = (user) => {

    //Need to check if all appropriate fields have been entered in 
    if (!user.username || !user.password) {
        return null;
    }

    //When database is added, checking unique usernames and ensuring user does not already exist in database will be added

    let password = user.password;

    const newUser = {
        id: uuidv4(),
        username: user.username,
        password: password,
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

    users.forEach(user => {
        if (user.hasOwnProperty(id)) {
            if(user.id === userId) {
                return user;
            }
        }
    });

    return null; 

}

module.exports = {
    registerUser, 
    followUser,
    getUser,
    getUserWithId
}