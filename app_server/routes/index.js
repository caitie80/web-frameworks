const express = require('express');
const router = express.Router();

const ctrlRecipes = require('../controllers/recipes'); 
const ctrlAccount = require('../controllers/account');

/* Recipes pages */
router.get('/', ctrlRecipes.homelist);
router.get('/recipe', ctrlRecipes.recipeInfo);
/* Account pages */
router.get('/signup', ctrlAccount.signUp);
router.get('/login', ctrlAccount.logIn);
module.exports = router;

