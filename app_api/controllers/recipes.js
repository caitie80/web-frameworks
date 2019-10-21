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

  const recipeReadOne = function (req, res) {
    if (req.params && req.params.recipeid) {
      Rec
        .findById(req.params.recipeid)
        .exec((err, recipe) => {
          if (!recipe) {
            res	
              .status(404) 
              .json({	
                "message": "recipeid not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(recipe);
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "No recipeid in request"
        });		
    }
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
