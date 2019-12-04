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

const accountsGetOne = function (req, res) {
 let query = {
  password: req.query.password,
  email: req.query.email
 };
 
 Us
 .find(query)
 .exec((err, results) => {
 
  if(err){
    res
    .status(400)
    .json(err);
  }
   else if(results.length == 0)
  {
    res
    .status(404)
    .json({"message": "Account not found not found"});
  }
  else{
    res
      .status(202)
      .json(results);
  }

}
)
};


const accountsCreate = function(req, res) {
    Us.create({ 
      
      email: req.body.email,
      password: req.body.password
      },(err, user) => {  
        if (err) {
          res
          .status(400)
          .json(err);
        }

        else {
          res
          .status(201)
          .json(user)
        }
        }
    )}; 
      
      /*(err, user) => { 
        if(!user){
          window.alert("email");
        }

      if (err) {
        res
        .status(400)
        .json(err);
      } 
      else {
        res
        .status(201)
        .json(user);
      }
    });
};*/
      

module.exports = {
  accountsCreate,
  accountsReadOne,
  accountsGetOne
};
