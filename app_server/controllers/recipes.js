/* GET 'home' page */
const homelist = function(req, res){
    res.render('index', { title: 'Home' });
    };
    
    /* GET 'Recipe info' page */
    const recipeInfo = function(req, res){
    res.render('index', { title: 'Recipe info' });
};

    module.exports = {
homelist,
recipeInfo
};
