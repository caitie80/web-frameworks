const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedRecipes: [String]
});

mongoose.model('User', userSchema);