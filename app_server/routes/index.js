const express = require('express');
const router = express.Router();

const ctrlRecipes = require('../controllers/recipes'); 
const ctrlAccount = require('../controllers/account'); 
const ctrlOther = require('../controllers/other');

/* Recipes pages */
router.get('/', ctrlRecipes.homelist);
router.get('/recipe/:recipeid', ctrlRecipes.recipeInfo);
/* Account pages */
router
.route('/signup')
.get(ctrlAccount.signUp)
.post(ctrlAccount.doSignUp);

router
.route('/login')
.get(ctrlAccount.logIn)
.post(ctrlAccount.doLogIn);

router.get('/about', ctrlOther.about);
module.exports = router;

