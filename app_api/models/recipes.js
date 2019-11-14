const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    prepTime: {
        type: String,
        'default': "0 minutes"
    },
    cookTime: {
        type: String,
        'default': "0 minutes"
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    tags: [String],
    imagePath: String
});

mongoose.model('Recipe', recipeSchema);