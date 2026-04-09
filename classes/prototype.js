let myName="abhi   "
//console.log(myName.trim().length);
//console.log(myName.trueLength);

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:'sling',
    getSpiderPower:function(){
        // console.log(`Spidy power is:${this.spiderman}`);
        
    }

}
Object.prototype.abhi=function(){
    // console.log(`abhi is present in all objects`);
    
}
Array.prototype.heyAbhi =function(){
// console.log(`abhi says hello`);
}
// myHeros.abhi()
// heroPower.abhi()
// myHeros.heyabhi()
myHeros.heyAbhi()
//heroPower.heyAbhi()

//inhertiance
//outdated
const User={
    name:"abhishke",
    email:"abhi@gmail.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'js assign',
    fullTime:true,
    __proto__:TeachingSupport
}
//new Approach
//modern Structure
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName ="abhi   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
   //  console.log(`${this.name}`);
   // console.log(`true length is:${this.trim().length}`); 
    
}
anotherUserName.trueLength()
//here this refernce the context of truelenth method ()
"abhishek".trueLength()

