function auth(req, res, next) {

    if (!req.session.loggedIn) {
        res.status(401).send("Unauthorized");
        //res.redirect("http://localhost:3000/");
        return;
    }

    next();
}

function contributor(req, res, next) {
    if (!req.session.user.Type === "Contributing") {
        res.status(401).send("Unauthorized. Contributing access required");
        return;
    }
    next();
}

module.exports = {
    auth,
    contributor,
}