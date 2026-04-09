// const person={
//     name:["bob","smith"],
//     age:31,
    
//     bio:function(){
//         console.log(`My name is${this.name}and age is${this.age}`);
        
//     },
//      bio(){
//         console.log(`My name is${this.name}and age is${this.age}`);
        
//     },
//     intoduceSelf:function(){
//         console.log(`hi this is${this.name[0]}`);
        
//     }
// }
// console.log(person);
// console.log(person.bio());
// console.log(person.intoduceSelf());
const person={
    name:["bob","smith"],
    age:31,   
    
}
person.age = 45;
person["name"]["last"] = "Cratchit";
person["eyes"] = "hazel";
person.farewell=function(){
    console.log("bye everyday");
    
}
function logProperty(property){
    console.log(person[property]);
   
}

logProperty("name")
logProperty("age")
// person["eyes"];
person.farewell();





