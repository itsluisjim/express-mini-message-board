var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there! Leave a positive message.",
    first: "Amando",
    last: "Smith",
    added: new Date()
  },
  {
    text: "Don't forget to keep on coding!",
    first: "Charles",
    last: "Darwin",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'World Message Board', subheading: 'Share your thoughts with the world', messages: messages });
});

router.get('/new', function(req, res){
  res.render('form', { title: 'Share your message with the world'});
})

router.post('/new', function(req, res){
  messages.push({
    text: req.body.message,
    first: req.body.firstname,
    last: req.body.lastname,
    added: new Date()
  });

  res.redirect('/');
})

module.exports = router;
