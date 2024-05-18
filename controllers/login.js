const path = require('path');
const rootDir = require('../util/path');

const getUserLoginData = require('../models/getUserLoginData');
exports.getLogin = (req,res,next)=>{

    
    res.sendFile(path.join(rootDir,'views','login','login.html'));
    
};

exports.postLogin = async (req,res,next)=>{
    try{
        let loginResponse = await getUserLoginData(req.body.username,req.body.password);
        console.log(loginResponse);
        if(loginResponse.status===200){
            console.log('inside status code')
            res.redirect('/');
        }
    }catch (error){
        throw error;
    }
    
    
    
    
    
};

