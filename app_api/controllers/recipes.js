const mongoose = require('mongoose');
const Rec = mongoose.model('Recipe');


const recipesCreate = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };
const recipesListByName = function (req, res) {res
  .status(200)
  .json({"status" : "success"});
   };
const recipeReadOne = function (req, res) {res
  .status(200)
  .json({"status" : "success"});
   };
const recipeUpdateOne = function (req, res) {res
  .status(200)
  .json({"status" : "success"});
   };
const recipeDeleteOne = function (req, res) {res
  .status(200)
  .json({"status" : "success"});
   };

module.exports = {
  recipesCreate,
  recipesListByName,
  recipeReadOne,
  recipeUpdateOne,
  recipeDeleteOne
};
