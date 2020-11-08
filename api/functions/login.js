const users = require("../../db/users-data.json");

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
    loginUser 
}