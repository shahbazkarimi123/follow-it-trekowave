const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/userData');


const getUserLoginData = require('../models/getUserLoginData');

exports.getLogin = (req,res,next)=>{

    
    res.sendFile(path.join(rootDir,'views','login','login.html'));
    
};

exports.postLogin = async (req,res,next)=>{
    try{
        let loginResponse = await getUserLoginData.getUserLoginData(req.body.username,req.body.password);
        // console.log(loginResponse.status);
        if(loginResponse.status===200){
            // userNameExport =loginResponse.data['data']['username'];
            // passwordExport = loginResponse.data['data']['password'];
            res.redirect('/');
        }
    }catch (error){
        throw error;
    }
};

