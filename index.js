const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

//DB Connection
require('./config/db');

//Body
app.use(express.json());

//Routes
app.use('/', require('./routes'));

const PORT = 3000;
app.listen(PORT || process.env.PORT, () =>
	console.log('Server running on port 3000')
);
