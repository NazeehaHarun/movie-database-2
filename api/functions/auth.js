function auth(req, res, next) {

    if (!req.session.loggedIn) {
        res.status(401).send("Unauthorized");
        return;
    }

    next();
}

function contributor(req, res, next) {
    res.status(200).send("Contributor");
    return; 
}