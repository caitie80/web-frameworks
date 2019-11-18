const request = require('request');

const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://caitiewf.herokuapp.com'; 
    }
    
/* GET 'home' page */
const _renderHomepage = function(req, res, responseBody) {
    let message = null; 
if (!(responseBody instanceof Array)) { 
message = "API lookup error"; 
responseBody = []; 
} else { 
if (!responseBody.length) { 
message = "No recipes found"; 
} 
}

    
    res.render('recipes-list', { 
        title: 'Home',
        pageHeader: {
            title: 'CookBooker',
            strapline: 'Find inspiration for what to cook!'
        },
        savedRecipes: ['Beef Burgers', 'Chicken Curry'],
        recipes: responseBody,
        message: message
    });
}
const homelist = function(req, res){
    const path = '/api'; 
    const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {}, 
    qs : {} 
    }; 
    request(requestOptions, (err, response, body) => {
        if(response.statusCode === 200)
        {
            _renderHomepage(req, res, body); 
        } 
        else{
            _showError(req, res, response.statusCode);
        }
   
    } 
    );
    };
    
    const _renderDetailPage = function (req, res, data) { 
        res.render('recipe', { 
        title: 'Recipe info', 
        pageHeader: {
            title: 'CookBooker',
            strapline: 'Find inspiration for what to cook!'
        },
        recipe: data
        });
        };
        
    
    /* GET 'Recipe info' page */
    const recipeInfo = function(req, res){
        const path = `/api/recipe/${req.params.recipeid}`; 
        requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {} 
        }; 
        request(requestOptions,(err, response, body) => {
            let data = body;
            if(response.statusCode === 200)
            {
                _renderDetailPage(req, res, data); 
            }
            else{
                _showError(req, res, response.statusCode);
            }
        }
        );
        };

        const _showError = function (req, res, status) {
            let title = '';
            let content = '';
            if (status === 404) { 
            title = '404, page not found'; 
            content = 'Oh dear. Looks like we can\'t find this page. Sorry.'; 
            } else { 
            title = `${status}, something's gone wrong`; 
            content = 'Something, somewhere, has gone just a little bit wrong.'; 
            }
            res.status(status); 
            res.render('generic-text', { 
            title : title, 
            content : content 
            }); 
            };
            
        

    module.exports = {
homelist,
recipeInfo
};
