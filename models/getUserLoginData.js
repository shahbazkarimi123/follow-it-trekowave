const axios = require('axios');

async function getUserLoginData(userName,password){
    let uri = "http://139.84.165.121:8000/api/user-login/";
    const headers ={
        'Authorization': 'token b1411d86fc0111ebc99f3de297cad5e1f21438f2',
        'Content-Type': 'application/json'
    };
    try{
        const response = await axios.post(uri,JSON.stringify({'username':userName}),{headers});
            // console.log(response.data['data']['password']);
            if(response.data['data']['password']===password){
                // console.log('inside password');
                return response;
            }


        
    }catch(error){
        throw error;
    }

}
module.exports = getUserLoginData;