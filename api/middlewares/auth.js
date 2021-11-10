const checkAuth = (req, res, next) => req.isAuthenticated() ? next() : res.status(401).send("unauthorized");

module.exports = checkAuth;