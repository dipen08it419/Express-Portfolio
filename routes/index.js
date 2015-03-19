//File: api.js
//Author: Dipen Shah
//Site: https://portfoilo.herokuapp.com/
//Description: This script handles / (root) path

var express = require('express');
var router = express.Router();
var fileStream = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {title:'Home'});
});
router.get('/home', function(req, res, next) {
  res.render('home', {title:'Home'});
});
router.get('/index', function(req, res, next) {
  res.render('home', {title:'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title:'About Dipen'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title:'Contact Dipen'});
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title:'Projects'});
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title:'Services'});
});
/* GET sitemap page. */
router.get('/sitemap', function(req, res, next) {
  res.render('sitemap', {title:'Sitemap'});
});
/* GET terms page. */
router.get('/terms', function(req, res, next) {
  res.render('terms', {title:'Terms of Use'});
});
/* GET privacy page. */
router.get('/privacy', function(req, res, next) {
  res.render('privacy', {title:'Privacy'});
});

//handling /contacts/get route for get request
router.get('/getContacts', function(req,res){
    res.render('authenticate',{title:"Authenticate"});
});

//handling /contacts/get route for post request
router.post('/getContacts', function(req,res){
    //getting username and password from the request
    var username = req.body.username;
    var password = req.body.password;
    
    //validating
    if(username === 'devsd' && password === 'portfolio.contacts.get'){
        fileStream.readFile("./data/contacts.txt",function(err,data){
            if(err){
                console.log(err);
                throw err;
            }
            else{
                res.write(data.toString("utf-8"));
                res.end();
            }
        });
        
    }else{
        res.send(JSON.stringify({ "Invalid" : true }));
        res.end();
    }
});

module.exports = router;
