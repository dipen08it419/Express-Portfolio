var express = require('express');
var router = express.Router();

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

module.exports = router;
