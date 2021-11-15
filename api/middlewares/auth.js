const checkAuth = (req, res, next) => req.isAuthenticated() ? next() : res.status(401).send("unauthorized");
const checkAuthAdmin = (req, res, next) => req.isAuthenticated() && req.user[0].admin ? next() : res.status(401).send("unauthorized");

module.exports = {checkAuth, checkAuthAdmin}