const User = require("../../db/schema/userSchema");

const users= require("../../db/users-data.json"); 

const registerUser = (user) => {
   
    //Need to check if all appropriate fields have been entered in 
    if (!user.username || !user.password || !user.type) {
        console.log(user.type)
        return null;
    }

    const newUser = new User({
        userName: user.username,
        password: user.password,
        Type: user.type
    });

    return newUser;
    
}

const followUser = (user, userToFollow) => {

    if (user === null || userToFollow === null) {
        return false;
    }

    user.following.push(userToFollow);
    userToFollow.followers.push(user);
    
    return true;

};

const user = (searchParameters) => {
    
    let userList = [];

    //If no parameters were supplied --> Return all the users
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
    
    if (userId == null) {
        return null;
    } else {
        return userId;
    }

}

const changeUserType = (user) => {
    
    if (user.Type === "Regular") {
        return "Contributing";

    } else if (user.Type === "Contributing") {
        return "Regular";

    }
}


module.exports = {
    registerUser, 
    followUser,
    user,
    userWithId,
    changeUserType
   
}