const express = require('express');
const router = express.Router();
const ctrlRecipes = require('../controllers/recipes');
const ctrlAccounts = require('../controllers/accounts');

// Recipes
router
  .route('/')
  .get(ctrlRecipes.recipesListByName)
  .post(ctrlRecipes.recipesCreate);

router
  .route('/recipe/:recipeid')
  .get(ctrlRecipes.recipeReadOne)
  .put(ctrlRecipes.recipeUpdateOne)
  .delete(ctrlRecipes.recipeDeleteOne);
  
// Account
router
  .route('/signup')
  .post(ctrlAccounts.accountsCreate);

router
  .route('/login')
  .get(ctrlAccounts.accountsGetOne);

module.exports = router;