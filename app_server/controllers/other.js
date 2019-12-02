const request = require('request');


const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://caitiewf.herokuapp.com'; 
    }

const _renderAbout = function (req, res) { 
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Aliquam commodo aliquet ipsum. Nunc neque purus, bibendum eu sem vel," +
        " euismod consectetur felis. Integer tempus vestibulum egestas. Donec " + 
        "lectus libero, aliquet eget gravida non, congue a ex. Suspendisse pretium " +
        "leo sed ligula consectetur tincidunt. Aenean turpis justo, iaculis a erat " +
        "quis, venenatis hendrerit libero. Nullam ornare pretium turpis congue " +
        "dapibus. Nullam maximus, nibh eu auctor tincidunt, lectus augue convallis " + 
        "odio, ut porttitor nisi ex eu ligula. Curabitur bibendum porttitor ante, " +
        "pharetra dignissim nunc blandit vel. Suspendisse egestas, dolor vitae "+
        "blandit gravida, purus massa accumsan risus, eu consequat felis lorem quis "+
        "sapien. Donec commodo sapien lacus, id cursus enim sodales sit amet. Aenean " +
        "et laoreet metus. Morbi varius fringilla efficitur."
    res.render('about', { title: 'About', content: content});
};
    

/* GET sing up page */
const about = function(req, res){ 
 _renderAbout(req, res);
};

module.exports = {
    about
    };