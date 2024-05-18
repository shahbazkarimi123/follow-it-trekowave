class User{
    constructor(userName,password){
        this.userName = userName;
        this.password = password;
    }
    getUserName(){
        return this.userName;
    }
    getPassword(){
        return this.password;
    }
    setUserName(userName){
        this.userName = userName;
    }
    setPassword(password){
        this.password = password;
    }

}

module.exports = User;

