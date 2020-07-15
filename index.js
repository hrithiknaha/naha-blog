const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

//DB Connection
require('./config/db');

//Models
const Blogs = require('./models/blog');

//Body
app.use(express.json());

//Routes
app.get('/hello', (req, res) => {
	res.send('hello World!').status(200);
});

app.get('/blogs', (req, res) => {
	Blogs.find((err, blogs) => {
		if (err) return console.log('Something went wrong ' + err);
		if (blogs.length === 0) return res.json('No data found');
		return res.json(blogs);
	});
});

app.post('/blogs/new', (req, res) => {
	const blogs = new Blogs(req.body);
	blogs.save((err, savedBlog) => {
		if (err) return console.log('Unable to save ' + err);
		return res.json(savedBlog);
	});
});

const PORT = 3000;
app.listen(PORT || process.env.PORT, () =>
	console.log('Server running on port 3000')
);
