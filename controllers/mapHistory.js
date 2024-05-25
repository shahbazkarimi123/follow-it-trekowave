const getStayAndStatData = require('../models/getStayAndStatData');

const getDateTime = require('../util/dateTimeMillisec');
const getCurrentData = require('../models/currentLocation');
exports.getMapHistoryController = async (req,res,next)=>{
    const terminalID = req.query.terminalID;
    const startDate = getDateTime.getMidnightDateTime();
    
    const endDate = getDateTime.getCurrentDateTimeFormatted();

    try{
        const response = await getStayAndStatData(terminalID,startDate,endDate);
        // console.log('inside get map history');
        const currentLocationData =await getCurrentData.getCurrentLocation(terminalID);
        const lat = currentLocationData.data['data'][0]['location']['lat'];
        const lon = currentLocationData.data['data'][0]['location']['lon'];
        let username = currentLocationData.data['data'][0]['username'];
        let locationType = currentLocationData.data['data'][0]['location']['locationType'];
        let speed = currentLocationData.data['data'][0]['location']['speed'];
        let acc = currentLocationData.data['data'][0]['location']['acc'];

        console.log(lat,lon);
        res.render('screen/map-history',{
            polylineData:response.data['content'],
            lat:lat,
            lon:lon,
            username:username,
            id : terminalID,
            locationType:locationType,
            speed:speed,
            acc:acc

        })

    }catch(error){
        console.log(error);
    }

}