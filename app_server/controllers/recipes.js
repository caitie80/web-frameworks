/* GET 'home' page */
const homelist = function(req, res){
    res.render('recipes-list', { title: 'Home' });
    };
    
    /* GET 'Recipe info' page */
    const recipeInfo = function(req, res){
    res.render('recipe', { title: 'Recipe info' });
};

    module.exports = {
homelist,
recipeInfo
};
