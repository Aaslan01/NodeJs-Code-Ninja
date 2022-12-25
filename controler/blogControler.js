
const Blog = require('../models/blog')

// blogs_details 

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 }).then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result })
    }).catch((err) => console.log(err));
}

const blog_creation_redirect = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blog_creation = (req, res) => {
    const blog = new Blog(req.body)
    blog.save().then((request) => {
        res.redirect('/blogs')
    }).catch(err => console.log(err))
}

const blog_get_id = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) =>
            res.render('details', { title: 'Blogs details', blog: result })
        )
        .catch(res => console.log(res))
}

const blog_deleting =(req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) =>
            res.json({ redirect: '/blogs' }))
        .catch(err => console.log(err))
}

module.exports = {
    blog_index,
    blog_creation,
    blog_creation_redirect,
    blog_get_id,
    blog_deleting,
}