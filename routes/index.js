const express = require('express');
let router = express.Router();
const jokes = require("../model/jokes");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',userName:req.session.userName });
});

router.get('/joke', function(req, res, next) {
  res.render('randomJoke', { title: 'Joke of Today', joke:jokes.getRandomJoke() });
});

router.get('/jokes', function(req, res, next) {
  res.render('allJokes', { title: 'All Jokes', jokes:jokes.getAllJokes() });
});

router.get('/addJoke', function(req, res, next) {
  res.render('addJoke', { title: 'Add Joke', jokeCount :jokes.getAllJokes().length });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', jokeCount :jokes.getAllJokes().length });
});

router.get('/logout', function(req, res, next) {
  req.session.userName = null;
  res.redirect("/");
});

router.post('/storeJoke', function(req, res, next) {
  const joke = req.body.joke;
  jokes.addJoke(joke);
  res.redirect("/addJoke");
  //res.render('allJokes', { title: 'All Jokes', jokes:jokes.getAllJokes() });
});

module.exports = router;
