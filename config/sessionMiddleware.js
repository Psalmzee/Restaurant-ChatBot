const session = require("express-session");

const { config } = require("./config");


const maxAge = parseInt(config.sessionMaxAge)

const sessionMiddleware = session({
	secret: config.sessionSecret,
	resave: false, 
	saveUninitialized: true,
	cookie: { secure: false, maxAge },
});

module.exports = sessionMiddleware;
