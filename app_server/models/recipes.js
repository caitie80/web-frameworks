const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        'default': 0
    },
    cookTime: {
        type: Number,
        'default': 0
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