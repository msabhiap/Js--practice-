class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is:${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }
    addCourse(){
        console.log(`new course addweed${this.username}`);
        
    }
}
const chai= new Teacher("chai","abhia@gmail.com","123")
chai.addCourse()
chai.logMe()
const newName=new User("masala")
newName.logMe()
console.log(chai instanceof User);

