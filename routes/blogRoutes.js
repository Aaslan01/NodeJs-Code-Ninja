const express = require('express');
const router = express.Router();
const Blog = require('../models/blog')
const blogControler = require('../controler/blogControler')

// Remember this Middleware run from top to buttom so place routers according to 
// their scope and run strategy

//Get all blogs
router.get('/', blogControler.blog_index) 
// posting the blog on mongoDb then redirect back to Blog posts
router.post('/', blogControler.blog_creation);
//  Blog Creation
router.get('/create', blogControler.blog_creation_redirect);
//opening specific blog
router.get('/:id', blogControler.blog_get_id)
//Deleting the blog
router.delete('/:id', blogControler.blog_deleting)

module.exports = router;