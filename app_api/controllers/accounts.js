const mongoose = require('mongoose');
const Rec = mongoose.model('Recipe');

const accountsCreate = function (req, res) { res
    .status(200)
    .json({"status" : "success"});
    };
const accountsReadOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };

module.exports = {
  accountsCreate,
  accountsReadOne
};
