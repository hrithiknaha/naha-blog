const router = require('express').Router();

//Models
const Blogs = require('../models/blog');

router.get('/blogs', (req, res) => {
	Blogs.find({}, (err, blogs) => {
		if (err) return console.log('Something went wrong ' + err);
		if (blogs.length === 0) return res.json('No data found');
		return res.json(blogs);
	});
});

router.post('/blogs/new', (req, res) => {
	const blogs = new Blogs(req.body);
	blogs.save((err, savedBlog) => {
		if (err) return console.log('Unable to save ' + err);
		return res.json(savedBlog);
	});
});

module.exports = router;
