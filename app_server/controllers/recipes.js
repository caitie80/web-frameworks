/* GET 'home' page */
const homelist = function(req, res){
    res.render('recipes-list', { 
        title: 'Home',
        pageHeader: {
            title: 'CookBooker',
            strapline: 'Find inspiration for what to cook!'
        },
        savedRecipes: ['Beef Burgers', 'Chicken Curry'],
        recipes: [{
                name: 'Beef Burgers',
                prepTime: '30 minutes',
                cookTime: '30 minutes',
                tags: ['Gluten Free', 'American', 'Beef'],
                imagePath: '/images/burger.jpg'
           },
           {
                name: 'Chicken Curry',
                prepTime: '30 minutes',
                cookTime: '10 minutes',
                tags: ['Chicken', 'Asian'],
                imagePath: '/images/curry.jpg'
           },
           {
                name: 'Cheese and Mushroom Gnocchi',
                prepTime: '10 minutes',
                cookTime: '10 minutes',
                tags: ['Vegetarian', 'Pasta','Fast'],
                imagePath: '/images/gnocchi.jpg'
                },
        ]
    });
    };
    
    /* GET 'Recipe info' page */
    const recipeInfo = function(req, res){
    res.render('recipe', { title: 'Recipe info',
        recipe: {
            name: 'Beef Burgers',
            prepTime: 30,
            cookTime: 30,
            tags: ['Gluten Free', 'American', 'Beef'],
            ingredients: ['500g beef mince', '1 egg', '1 tbsp vegetable oil',
                '1 small onion, diced', '4 gluten free burger buns'],
            instructions: ['Tip 500g beef mince into a bowl with 1 small diced onion and 1 egg, then mix.',
                'Divide the mixture into four. Lightly wet your hands. Carefully roll the mixture into balls, each about the size of a tennis ball.',
                'Set in the palm of your hand and gently squeeze down to flatten into patties about 3cm thick. Make sure all the burgers are the same thickness so that they will cook evenly.',
                'Put on a plate, cover with cling film and leave in the fridge to firm up for at least 30 mins.',
                'Heat the barbecue to medium hot (there will be white ash over the red hot coals – about 40 mins after lighting). Lightly brush 1 side of each burger with vegetable oil.',
                'Place the burgers, oil-side down, on the barbecue. Cook for 5 mins until the meat is lightly charred. Don’t move them around or they may stick.',
                'Oil the other side, then turn over using tongs. Don’t press down on the meat, as that will squeeze out the juices',
                'Cook for 5 mins more for medium. If you like your burgers pink in the middle, cook 1 min less each side. For well done, cook 1 min more.',
                'Take the burgers off the barbecue. Leave to rest on a plate so that all the juices can settle inside.',
                'Slice 4 burger buns in half. Place, cut-side down, on the barbecue rack and toast for 1 min until they are lightly charred. Place a burger inside each bun, then top with your choice of accompaniment.'],
            imagePath: '/images/burger.jpg'
            }
        
    });
};

    module.exports = {
homelist,
recipeInfo
};
