const axios = require('axios');
const dateTimeMillisecond = require('../util/dateTimeMillisec');

async function getStayAndStatData(terminalID,startDate,endDate) {
    const startDateMillisecond = dateTimeMillisecond.datetimeToMilliseconds(startDate);
    const endDateMillisecond = dateTimeMillisecond.datetimeToMilliseconds(endDate);
    console.log(terminalID,startDateMillisecond,endDateMillisecond);
    // const terminalID = document.getElementById('terminalID').value;
    const uri = `https://api.gwgps12580.com/v1/Ch_manage_controller/api/stay/find`;
    const headers = {
        'apiKey': 't9ITEJmyM4lw27i17D1ir5BF0LGBU34t',
        'Content-Type': 'application/json'
        
    };
    // "865167041335630"
    var body = {
        "terminalID": terminalID,
        "beginTime": startDateMillisecond,
        "endTime": endDateMillisecond,
        "pageNum": 1,
        "pageSize": 8
    };
    const jsonData = JSON.stringify(body);
    try {
        // console.log(2);
        const responce = await axios.post(uri, jsonData, { headers });
        // console.log(3);
        if(responce.status===200){
            // console.log(4);
            // console.log(responce.data);
            return responce;
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = getStayAndStatData;