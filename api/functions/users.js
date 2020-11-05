const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid");
const { use } = require("../handlers/users");

const users=[{"Type":"Contributing","userName":"David", "password": "12345", "id":"1"},
{"Type":"Regular","userName":"Nazeeha","password": "12345", "id":"2"},
{"Type":"Contributing","userName":"Micheal", "password": "12345", "id":"3"},
{"Type":"Contributing", "userName": "John", "password": "12345", "id":"4"},
{"Type":"Regular", "userName":"Rob", "password": "12345", "id":"5"},
{"Type":"Contributing", "userName":"Jon", "password": "12345", "id":"6"},
{"Type":"Regular", "userName":"Jordon", "password": "12345", "id":"7"},
{"Type":"Regular","userName":"Brad", "password": "12345", "id":"8"}]


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
        type: "regular"
    }

    users.push(newUser); 

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


const loginUser = (userObj) => {
    
    let currentUser = null;

    users.forEach(user => {
        if (user.userName === userObj.username && user.password === userObj.password) {
            currentUser = user;
            
        }
    });

    return currentUser;

}

module.exports = {
    registerUser, 
    followUser,
    loginUser
}