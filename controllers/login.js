const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/userData');


const getUserLoginData = require('../models/getUserLoginData');
exports.getLogin = (req,res,next)=>{

    
    res.sendFile(path.join(rootDir,'views','login','login.html'));
    
};
let userNameExport='';
let passwordExport=''; 
exports.postLogin = async (req,res,next)=>{
    try{
        let loginResponse = await getUserLoginData(req.body.username,req.body.password);
        // console.log(loginResponse);
        if(loginResponse.status===200){
            userNameExport =loginResponse.data['data']['username'];
            passwordExport = loginResponse.data['data']['password'];
            res.redirect('/');
        }
    }catch (error){
        throw error;
    }
};

module.exports = {
    username:userNameExport,
    password:passwordExport

};