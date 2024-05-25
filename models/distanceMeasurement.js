const getStayAndStatData = require('./getStayAndStatData');
const timeDateFormate = require('../util/dateTimeMillisec');

async function distanceMeasure(terminalID){
    let currnetTime = timeDateFormate.getCurrentDateTimeFormatted();
    let startTimeMill = timeDateFormate.datetimeToMilliseconds(currnetTime);
    let midNightTime = timeDateFormate.getMidnightDateTime();
    let endTimeMill = timeDateFormate.getMidnightDateTime(midNightTime);
    let totalDistance = 0;
    try{
        const response = await getStayAndStatData(terminalID,startTimeMill,endTimeMill);
        if(response.data['content'].length !== 0){

            for(let i=0;i<response.data['content'].length-1;i++){
                totalDistance += haversine(getResponseStayData.data['content'][i]['lat'], getResponseStayData.data['content'][i]['lon'], getResponseStayData.data['content'][i+1]['lat'], getResponseStayData.data['content'][i+1]['lon']);
            }
        }
        return totalDistance;

    }catch(error){
        throw error;
    }
    return totalDistance;

    
} 





function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in meters
    return d;
}
module.exports = distanceMeasure;
