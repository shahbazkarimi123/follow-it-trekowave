const axios = require('axios');

exports.getCurrentLocation = async (terminalID)=>{
    let uri ='http://139.84.165.121:8000/api/location/get-by-imei/';

    const jsonData = JSON.stringify({'terminalID':[terminalID]});
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

