//const promise=new Promise()
//new keyword construct function
//from one object make multiple instace 

function User(username,loginCount,isLoggedIN){
   this.username=username;
   this.loginCount=loginCount;
   this.isLoggedIN=isLoggedIN

  // return this
}
const userOne=new User("hitesh",12,true)
const userTwo=new User("abhi",7,false)
console.log(userOne);
console.log(userTwo);

