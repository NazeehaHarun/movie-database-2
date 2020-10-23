const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid")

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

module.exports = {
    registerUser, 
    followUser
}