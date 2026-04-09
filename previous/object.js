
const mySymb=Symbol("key1")
//object literals
const jsUser={
    name:"abhi",
    age:19,
    [mySymb]:"key1",
    loction:"kathmamndu",
    email:"abhi@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday"]
}
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySymb]);
// console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello js user")
}

// console.log(jsUser.greeting())

jsUser.greetingOne=function(){
    //string interpolation
    console.log(`hello js user,${this.name}`);
}

// console.log(jsUser.greetingOne())
//singleton object
const tinderUser=new Object();
//nonsingleton Object
const tinderUser1={}
tinderUser.id="123"
tinderUser.name="Abhi"
tinderUser.isLoggedIn=false

// console.log(tinderUser)
const regular={
    email:"abc@gmail.com",
    fullname:{
        userfullName:{
            firstName:"abhi",
            lastName:"pandey"
        }
    }
}
// console.log(regular.fullname.userfullName)
//combine object
const obj={1:"a",2:"b"}
const obj1={1:"a",2:"b"}
//const obj3={obj,obj1}
//const obj3=Object.assign({},obj1,obj1)
//console.log(obj3)


//use spread opertaor

const obj3={...obj,...obj1}
// console.log(obj3);

//
const user=[
    {
        id:1,
        email:"abhi@gmail.com",
    }
]
//user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructure

const course={
    courseName:"nepali",
    price:"1000",
    courseTeacher:"abhi"
}

const{courseTeacher:teacher}=course;
console.log(teacher)


// const navbar=({company})=>{

// }
// navbar(company="abhi")

// {
//     "name":"abhi",
//     "courseName":"nepali",
//     "price":"free"

// }

