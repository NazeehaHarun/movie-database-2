function auth(req, res, next) {

    if (!req.session.loggedIn) {
        res.status(401).send("Unauthorized");
        res.redirect("http://localhost:3000/");
        return;
    }

    next();
}

function contributor(req, res, next) {
    res.status(200).send("Contributor");
    return; 
}

module.exports = {
    auth,
    contributor,
}