const path = require('path');
const rootDir = require('../util/path');

exports.getLogin = (req,res,next)=>{

    
    res.sendFile(path.join(rootDir,'views','login','login.html'));
    
};

exports.postLogin = (req,res,next)=>{
    console.log(req.body.username);
    
    res.redirect(307,'/map');
    
};

