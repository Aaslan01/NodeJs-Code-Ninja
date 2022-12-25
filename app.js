const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongoDb
const dbURI = 'mongodb+srv://Test123:123@cluster0.jkucpls.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
mongoose.connect(dbURI)
    .then((result) => { console.log("Connected to DB") })
    .catch((err) => console.log(err))
// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// middleware and static files
app.use(express.static('public'));

//Middleware to excess POST req data
app.use(express.urlencoded({ extended: true }));


app.use(morgan('tiny'));


//Home Page
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

//About Page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

//Blog Routes 
app.use('/blogs',blogRoutes);




// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});