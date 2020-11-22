const users = require("../../db/users-data.json");

const loginUser = (userObj) => {
    
    if (!userObj.username || !userObj.password) {
        return null;
    } else {
        return userObj;
    }

}



module.exports = {
    loginUser 
}