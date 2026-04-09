function setUser(userName){
    //complex Db calls
    this.userName=userName
}
function createUser(userName,email,Password){
    setUser.call(this,userName)
    //this.userName=userName;
    this.email=email;
    this.Password=Password
}
const chai=new createUser("abhi","abhi@gmail.com",'123')
console.log(chai);
