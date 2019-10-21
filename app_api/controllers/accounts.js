const mongoose = require('mongoose');
const Us = mongoose.model('User');

// const accountsCreate = function (req, res) { res
//     .status(200)
//     .json({"status" : "success"});
//     };
const accountsReadOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };

     const accountsGetOne = function (req, res) {res
      .status(200)
      .json({"status" : "success"});
       };

const accountsCreate = function(req, res) {
    Us.create({ 
      email: req.body.email,
      password: req.body.password
      }, (err, user) => { 
      if (err) {
      res
      .status(400)
      .json(err);
      } else {
      res
      .status(201)
      .json(user);
      }
      });
      };
      

module.exports = {
  accountsCreate,
  accountsReadOne,
  accountsGetOne
};
