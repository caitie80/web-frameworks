/* GET sing up page */
const signUp = function(req, res){ 
res.render('index', { title: 'Sign Up' }); 
};

/* GET sing up page */
const logIn = function(req, res){ 
    res.render('index', { title: 'Log In' }); 
};

module.exports = { 
    signUp,
    logIn 
};
