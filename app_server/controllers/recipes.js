/* GET 'home' page */
const homelist = function(req, res){
    res.render('recipes-list', { 
        title: 'Home',
        pageHeader: {
            title: 'CookBooker',
            strapline: 'Find inspiration for what to cook!'
        },
        recipes: [{
                name: 'Beef Burgers',
                prepTime: '30 minutes',
                cookTime: '30 minutes',
                tags: ['Gluten Free', 'American', 'Beef']
           },
           {
                name: 'Chicken Curry',
                prepTime: '30 minutes',
                cookTime: '10 minutes',
                tags: ['Chicken', 'Asian']
           },
           {
            name: 'Cheese and Mushroom Gnocchi',
            prepTime: '10 minutes',
            cookTime: '10 minutes',
            tags: ['Vegetarian', 'Pasta','Fast']
            },
        ]
    });
    };
    
    /* GET 'Recipe info' page */
    const recipeInfo = function(req, res){
    res.render('recipe', { title: 'Recipe info' });
};

    module.exports = {
homelist,
recipeInfo
};
