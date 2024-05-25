const axios = require('axios');

const userInfo = {'usernameG':'','devices':[]};

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
                userInfo['usernameG']=userName;
                userInfo['devices']=response.data['data']['device'];

                // console.log(response.data);
                return response;
            }


        
    }catch(error){
        throw error;
    }

}
exports.getUserLoginData=getUserLoginData;

exports.userInfo = userInfo;
