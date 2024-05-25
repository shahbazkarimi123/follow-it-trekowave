const axios = require('axios');
const userInfo = require('./getUserLoginData');
async function getDeviceDetails(){
    // console.log(userInfo.userInfo['devices']);
    let uri = 'http://139.84.165.121:8000/api/device/get-by-imei/';
    const jsonData = JSON.stringify({'deviceID':userInfo.userInfo['devices']});
    const headers ={
        'Authorization': 'token b1411d86fc0111ebc99f3de297cad5e1f21438f2',
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post(uri,jsonData,{headers});
        
        return response.data;
    }catch (error){
        throw error;
    }
}



async function getDataFromAPI(){
    const deviceDetails = await getDeviceDetails();
    // console.log(deviceDetails);
    const deviceDetailsJson= JSON.stringify(deviceDetails);
    // console.log(deviceDetails.data)
    let terminalID = [];
    for(let i=0;i<deviceDetails.data.length;i++){
        terminalID.push(deviceDetails['data'][i]['terminal_id']);
        // console.log(deviceDetails.data[i]);
    }
    
    let uri ='http://139.84.165.121:8000/api/location/get-by-imei/';

    const jsonData = JSON.stringify({'terminalID':terminalID});
    // console.log('json Data',jsonData);
    const headers ={
        'Authorization': 'token b1411d86fc0111ebc99f3de297cad5e1f21438f2',
        'Content-Type': 'application/json'
    };

    try{
        // console.log("inside try");
        const response = await axios.post(uri,jsonData,{headers});
        // console.log(response.data)
        return response;
    }catch (error){

        // console.log("inside catch");
        // console.log(error.message);
        throw error;
    }
}

module.exports = getDataFromAPI;