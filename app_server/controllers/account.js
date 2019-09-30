/* GET sing up page */
const signUp = function(req, res){ 
res.render('signup', { title: 'Sign Up' }); 
};

/* GET sing up page */
const logIn = function(req, res){ 
    res.render('logIn', { title: 'Log In' }); 
};

module.exports = { 
    signUp,
    logIn 
};
