

const config = {
	botName: process.env.botName,
	PORT: process.env.PORT,
	mongoURI: process.env.mongoURI,
	sessionSecret: process.env.sessionSecret,
	local_db: process.env.local_db,
	db_name: process.env.db_name,
	sessionMaxAge: process.env.sessionMaxAge,
};

const cors = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

module.exports = { config, cors };
