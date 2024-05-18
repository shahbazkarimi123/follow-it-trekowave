const path = require('path');
const rootDir = require('../util/path');
const getDataFromAPI = require('../models/externalData');

exports.postMap = async (req,res,next)=>{
    try{
        const responseData = await getDataFromAPI();
        
        // console.log(responseData.data);
        res.render('screen/map',{recievedData:responseData.data});
    }
    // getDataFromAPI().then(data=>{
    //     res.render('screen/map',{recievedData:data});
    //     // console.log('Data',data);
    // })
    catch(error){
        console.error("Error",error);
    };
    
};