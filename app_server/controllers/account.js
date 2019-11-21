const request = require('request');


const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://caitiewf.herokuapp.com'; 
    }

const _renderSignUp = function (req, res) { 
    res.render('signup', { title: 'Sign Up' });
};
    

/* GET sing up page */
const signUp = function(req, res){ 
 _renderSignUp(req, res);
};

/* PUSH sing up page */
const doSignUp = function(req, res){ 
    const path = `/api/signup`; 
    const postdata = { 
    email: req.body.email, 
    password: req.body.pass
    }; 
    const requestOptions = {
        url : apiOptions.server + path, 
        method : 'POST', 
        json : postdata 
    };
    request( requestOptions,(err, response, body) => {
    if (response.statusCode === 201) { 
    res.redirect(`/`); 
    } else { 
    _showError(req, res, response.statusCode); 
    }
    }
    );
};


/* GET sing up page */
const logIn = function(req, res){ 
    res.render('logIn', { title: 'Log In' }); 
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
    signUp,
    logIn,
    doSignUp
};
