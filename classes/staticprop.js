class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is:${this.username}`);
    
    }
    //to block the access of create id of user only
   static createId(){
        return `123`
    }
}
const abhi=new User("abhi")
//console.log(abhi.createId() );
 
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new Teacher("iphone","i@phone.com",)
console.log(iphone.createId());


