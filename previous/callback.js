// function show(){
    
//     console.log(this===window)
// }
// // show();

// let car={
//     name:"hondau",
//     getBrand(){
//         return this.brand;
//     }
// }
// let brand=car.getBrand.bind(car);
// console.log(car.getBrand());
// console.log(brand());
// setTimeout(()=>{
//     console.log("hello")
// },4000)
// s 
// function getData(dataId,getNextData){
//     setTimeout(()=>{
// console.log("data",dataId);
// if(getNextData){
// getNextData();
// }

//     },2000);
// };
// getData(1,()=>{
//     getData(2);
// })
// function getData(dataId,getNextData){
//    setTimeout(()=>{
// console.log("Data",dataId);
// if(getNextData){
// getNextData();
// }

//    },2000) 
// }
// //callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// });
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//       if(getNextData){
//         getNextData();
//       }
//     },2000)
    
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     });
// })  

//producing new employee
// const getemployeId=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve([1,2,3,4,5])
// },2000)
// });

// getemployeId.then(ids=>{
//     console.log(ids)

// })
// .catch(error=>{
//     console.log(error)
// })

// let promise=new Promise((resolve,reject)=>{
// console.log("sdhfklsd")
// resolve(236)
// });
// function getData(dataId,getNextData){
//  return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("Dta ood",dataId);
//     resolve("success")
//     if(getNextData){
//         getNextData();
//     }
// },5000)

//  }) 
    
// }
// const getPromise=()=>{
//        return  new Promise((resolve,reject)=>{
//             console.log("i am ap apromise")
//             resolve("sucess");
//         });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("khsfkh",res)
// })
// promise.catch((err)=>{
//     console.log("rejectes",err)
// })

// function asyncFunc1()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data sucess")
//             resolve("success")
//         },3000)
//     });

// };
// function asyncFunc2()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data sucess in 2")
//             resolve("success")
//         },3000)
//     });

// };
// asyncFunc1().then((res)=>{
//     console.log("fetching data");
//     return asyncFunc2();

// }).then(()=>{
//     console.log("fegjfj")
// })

// async function hello(){
// console.log("hello")
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          console.log("weather data");
//         resolve(200);
//        },2000)

//     });
// };
// async function getWeatherData(){
//     await api();
// }

// const sales="Toyota"
// const car={
//     myCar:"abc",getCar:("honda"),special:sales
// };
// function getCar(name){
//     return name===" faw"? name:`soeryy no car${name}.`
// }
// console.log(car.myCar);
// // console.log(car.getCar);
// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number
// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1
// let a=1;
// let b="0"
// alert(Boolean(a=b));
// let acessAllowed;
// let age=18;
// if(age=18){
//     acessAllowed=true;
// }else{
//     acessAllowed=false;
// }
// alert(acessAllowed);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';


// alert( message );

// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// // let userName=prompt("whosthere",'')
// // if(userName=="Admin"){
// //     let pass=prompt('Password','');
// //     if (pass==="The Master"){

// //     }

    
// // }

// let msg=prompt("whats the name of js")
// if(msg=='Ecma'){
//   alert("right")
// }else{
//   alert("You sdont knpe")
// }
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );

// let visitor=prompt("Who's there",'');
// if (visitor=="admin"){
//  let pass=prompt('password','');
//  if(pass==='the master'){
//   alert('welcome')
//  }else if(pass==''||pass==null){
//   alert('canceled')
//  }else{
//   alert('wocnks')
//  }
// }
// for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert('Done!');
// function abhi(){
//   alert("abhi");
// }
// abhi();
// let user="jhon"
// function bai(){
//   user="bijay"
//   let b="show message"+user;
//   alert(b);
// }
// bai();

// function showMsg(from,text){
//     from="*"+from+"*"
//     alert( from + ': ' + text );
// }
// let from="anu"
// showMsg(from,"hello");
// function showMessage(from, text) { // parameters: from, text
//   alert(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?");


// //callback function
// function ask(question,yes,no){
//   if(confirm(question))
//     yes()
//   else no();
// }
// function showOK(){
//  alert("welcomw")
// }
// function showCancel(){
//   alert("cancel")
// }
// //usage::function show ok and show cancel can be passed as argument
// ask("Do youy agree",showOK,showCancel)

// function ask(question,yes,no){
// if(confirm(question))
//   yes()
// else no();
// }
// function showOk(){//callback
//   alert("welcome")
// }
// function showCancel(){//lcall back
//   alert("cancel")
// }
// ask("do ypu agree",showOk,showCancel)
 //funvtion declare
// function sum(a,b){
//   return a+b;
// }
// sum();

//function ecpression

// let sum=function(a,b){
//   return a+b;
// }

// function hello(name){
//   let phrase=`hello,${name}`;
//   say(phrase);
// }
// function say(phrase){
//   phrase="hello, hon"
//   alert(`**${phrase}**`)
// }
// let User={
//   name:"abhi",
//   age:30
// };
// let key="name";
// alert(User[key]);
// let fruit=prompt("which fruit to buy","apple");
// let bag={
// };
// bag[fruit]=5;

// let user={
//   name:"abhi",
//   age:30,
//   isAdmin:true,
// };
// for(key in user){
//   alert(key);
//   //  alert(user[key]);

// }
// let code={
//   "49":"germangy";

// }
// user={
// nams:"Jhon",
// surName:"Smith",
// };
// user.name="Pete";
// delete user.name;

// describe("isEmpty",function(){
//   it("returns emty object",function(){
//     assert.isTrue(isEmpty({

//     }));
//   });
//    it("returns false if a property exists", function() {
//     assert.isFalse(isEmpty({
//       anything: false
//     }));
//   });
// });
//   function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }

// describe("multiplyNumeric", function() {
//   it("multiplies all numeric properties by 2", function() {
//     let menu = {
//       width: 200,
//       height: 300,
//       title: "My menu"
//     };
//     let result = multiplyNumeric(menu);
//     assert.equal(menu.width, 400);
//     assert.equal(menu.height, 600);
//     assert.equal(menu.title, "My menu");
//   });

//   it("returns nothing", function() {
//     assert.isUndefined( multiplyNumeric({}) );
//   });

// });
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
// let user={
//   name:"abhi",
//   age:30,
// }
// let key=prompt("what yo know want to about user","age");
// alert(user[key]);

// function makeUser(name,age){
//   return{
//     name,age,
//   }
// }
// let user=makeUser("jhon",30)
// alert(user.name);
//obj assign
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true
//method example
// let user={
//     name:"Abhi",
//     age:30
// }
// user.sayHi=function(){
//     alert("hi")
// // }
// user.sayHi();
// let obj={model:"telsa;"}
// console.log("telsa" in obj);
// console.log(obj.hasOwnpropery("model"));

// let obj = { name: "Sourav", age: 22 };
// console.log(obj);

// obj.age = 23;
// console.log(obj);
// const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
// fruits.hasOwnProperty(3); // true ('Orange')
// fruits.hasOwnProperty(4); // false - not defined

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // 

// let calculator={
//     sum(){
//         return this.a+this.b;
//     },
//     mul(){
//         return this.a*this.b;

//     },
//     read(){
//         this.a=+prompt(`a?`,0);
//          this.b=+prompt(`b?`,0);
//     }
// };
// calculator.read();
// alert(calculator(sum));
// alert(calculator(mul));
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep()