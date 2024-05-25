const path = require('path');
const rootDir = require('../util/path');
const getDataFromAPI = require('../models/externalData');
// const getStayAndStatData = require('../models/getStayAndStatData');
// const getStayAndStatData = require('../models/getStayAndStatData');
const getMeasurement = require('../models/distanceMeasurement');


exports.getMap = async (req,res,next)=>{
    let running=0;
    let idle=0;
    let stopped =0;
    try{ 
        const responseData = await getDataFromAPI();
        const jsonData = responseData.data.data;
        let totalDevice = responseData.data.data.length;
        const totalDistance =new Map();
         const distancePromise =jsonData.map(async (item)=>{
            const distance = await getMeasurement(item['terminalID']);
            console.log(distance);
            
            totalDistance.set(item['username'],distance);
            if(item['location']['acc']===false){
                stopped++;
            }else if(item['location']['acc']===true && item['location']['speed']===0){
                idle++;
            }else if(item['location']['acc']===true){
                running++;
            }
        });
        await Promise.all(distancePromise);
        // let getStayAndStatDatas= getStayAndStatData();
        
        // console.log(1);
        const totalDistanceArray = Object.fromEntries(totalDistance);
        console.log(totalDistanceArray);
        
        // // const data = response['content'];
        // console.log(responseData.data.data);
        res.render('screen/map',
        {
            recievedData:responseData.data.data,
            totalDeviceData:totalDevice,
            stoppedData:stopped,
            idleData:idle,
            runningData:running,
            distance: totalDistanceArray
        }
    );
    }
    // getDataFromAPI().then(data=>{
    //     res.render('screen/map',{recievedData:data});
    //     // console.log('Data',data);
    // })
    catch(error){
        console.error("Error ",error);
    };
    
};