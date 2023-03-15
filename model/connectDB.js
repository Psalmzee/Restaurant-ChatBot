const mongoose = require("mongoose");
const { config } = require("../config/config");

function connectMongo(server) {
	mongoose.set("strictQuery", false);
	mongoose
		.connect(config.local_db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: config.db_name,
		})
		.then(() =>
			server.listen(config.PORT, () => {
				console.log(`App running on PORT: ${config.PORT} and MongoDB Server started Successfully!`);
			})
		)
		.catch((err) => console.log(err));
}

module.exports = connectMongo;
