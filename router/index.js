var express = require('express');
var userdb = require('../database');
var bcrypt = require('bcrypt');

var route = express.Router();

route.post('/add', function(req, res){

var email = req.body.email;

var password = req.body.password;

userdb.findOne({email: email}, function(err, user) {
  if(err) {
    return res.send({respond: 'something is wrong'});
  }

  if(user) {
    return res.send({respond: 'user does exist'});
  }

  bcrypt.hash(password, 10, function(err, hash) {
    var user = {};
    user.password = hash;
    user.email = email;

  userdb.create(user)
  .then(data => res.send({respond: 'registration successful'}))
  })
})

})

route.post('/login', function(req, res){

var email = req.body.email;
var password = req.body.password;

    userdb.findOne({email: email}, function(err, user) {
          if(err) {
            return res.send({respond: 'something is wrong'});
          }

          if(!user) {
            return res.send({respond: 'user does not exist'});
          }

        bcrypt.compare(password, user.password, function(error, results) {
          if(error)  {
            return res.send({respond: 'something is wrong'});
          }

          else if(!results)  {
            return res.send({respond: 'incorrect password or email'});
          }
          else if(results) {
            req.session.user = user;
            return res.send({respond: 'successful'});
          }
        })
    })
})

route.get('/delete', function(req, res){
  userdb.remove()
.then(data => res.send('removed all'))
})


route.get('/dashboard', function(req, res){
  if(req.session.user) {
    return res.send({respond:true});
  }
  else {
    return res.send({respond:false});
  }
})

route.get('/display', function(req, res){

userdb.find()
.then(data => { res.send(data)});
})

route.get('/logout', function(req, res){
  req.session.destroy();
  return res.redirect('../index.html');
})


module.exports = route;
