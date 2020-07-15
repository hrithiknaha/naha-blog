const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

module.exports = mongoose.connect(
	process.env.DB_CONFIG,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) return console.log('DB connection failed' + err);
		return console.log('DB is connected');
	}
);
