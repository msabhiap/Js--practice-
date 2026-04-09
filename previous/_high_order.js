// const numbers = [10, 20, 30, 40, 50];

// for (const num of numbers) {
//   //  console.log(num);
// }
// const greeting="hello world"
// for(const greet of greeting){
//    // console.log(greet)
    
// }

// //maps

// const map=new Map()
// map.set('Np',"nepal")
// //console.log(map)
// for (const [key,value] of map) {
//    // console.log(key,':-',value);
  
// }
// const map1=new Map()
// map1.set('Np',"nepal")
// //console.log(map)
// for (const key of map1) {
//    // console.log(key);
  
// }

// // const myObject={
// //     'name':"Gta",
// //     'price':300
// // }
// // for (const key of myObject) {
// //     console.log(`the value of name ${myObject}`)
    
// // }
// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby'
// }
// for (const key in myObject) {
//     //console.log(`${key} fullform is ${myObject[key]}`);
// }
// const program=["js","ruby","swift"]
// for (const key in program) {
//    // console.log(program[key]);
    
       
//     }

//     //fir in map no iternation in map
// // const naksha=new Map()
// // naksha.set('NP',"Nepal")
// // naksha.set('IN',"INdia")
// // naksha.set('US',"USa")
// // for(const key in naksha){
// //     console.log(naksha[key]);
    
// // }
// const coding=["js","ruby","swift"]

// // coding.forEach( function(val){
// //     console.log(val)

// // })
// coding.forEach((val)=>{
//   //  console.log(val)

// })
// //
// function printMe(val){
//    // console.log(val)    
// }
// coding.forEach(printMe)

// coding.forEach((items,index,arr)=>{
//     //console.log(items,index,arr);
// })

// const myCoding1=[
//     {
//         language:'js',
//         languageFileName:"js"
//     },
//     {
//         language:'java',
//         languageFileName:"java"
//     },
//     {
//         language:'laravel',
//         languageFileName:"php"
//     }
// ]
// // myCoding.forEach(function(item){
// //     console.log(item)
// // })
// // function print(item){
// //     console.log(item)
// // }
// // myCoding1.forEach(print)
// myCoding1.forEach((item)=>{
// console.log(item.language); 

// })

//for of

// const arr=[1,2,3,4]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting="hello World"
// for(const greet of greeting){
//     console.log(`ecah char${greet}`);
    
// }

// //Maps
// const map=new Map()
// map.set('in',"india")
// map.set('usa',"texas")
// //destructe array and values
// for(const [index,value] of map){
//     console.log(index,value);
    
// }
// //object iterate=>we cannot use for of loop

// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rp:"ruby"
// }
// for (const key in myObject) {o
//     console.log(`${key}:=${myObject[key]}`);
    
    
// }
//arrays
const programming=['java','cpp',"python","javascropt"]
for (const key in programming) {
   console.log(`${key} :=${programming[key]}`);
     
}
// map in for in loop

const map=new Map()
map.set("in","India")
map.set("np","Nepal")
for (const [key,value] of map) {
   console.log(key,value);
   
}
// const map1=new Map() cannot irretate in map
// map.set("np","Nepal")
// map.set("in","india")
// for (const [key,value] in map1) {
//    console.log(key,value);
   
   
// }
const program=['java','cpp',"python","javascropt"]

// program.forEach(function(item){
//    console.log(item);
   

// })
// program.forEach((items)=>{
// console.log(items);

// })

// function print(items){
//    console.log(items);
   
// }
// program.forEach(print)

// program.forEach((items,index,arrayList)=>{
//    console.log(items,index,arrayList);
   

// })

const coding=[
   {
      languageName:"js",
      type:"code"
   },
     {
      languageName:"java",
      type:"code"
   },  {
      languageName:"python",
      type:"code"
   },  
  
]
coding.forEach((item)=>{
   console.log(item.type);
   
})