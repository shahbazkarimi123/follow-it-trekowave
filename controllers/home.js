const path = require('path');
const rootDir = require('../util/path');

const getDataFromAPI =require('../models/externalData');

exports.getHomePage = async (req,res,next) => {
    let running=0;
    let idle=0;
    let stopped =0;
    try{
        const responseData = await getDataFromAPI();
        let totalDevice = responseData.data.length;
        for(let data of responseData.data){
            if(data['location']['acc']===false){
                stopped++;
            }else if(data['location']['acc']===true && data['location']['speed']===0){
                idle++;
            }else if(data['location']['acc']===true){
                running++;
            }

        }
        // console.log(responseData.data);
        res.render('screen/home-page',{
            totalDevice:totalDevice,
            runningDevice:running,
            stoppedDevice:stopped,
            idleDevice:idle
        });
    }catch (error){
        console.log("Error",error);
    }
    

    // res.sendFile(path.join(rootDir,'views','screen','home-page.html'));
};

