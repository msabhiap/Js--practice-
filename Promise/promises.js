//1.create Promise
//resolve method=call
const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
console.log('Asyn task is complete');
resolve()
    },1000)
})
//to consume promise
promiseOne.then(function(){
    console.log("Promise consumed");
    
})
//step 2 way to create and consume Promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asyn Task too');
        resolve()
    },1000)
}).then(function(){
 console.log("asyn completed");
 
})
///step 3
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({Username:"abhi",email:"abhi@gmail.com"})//Data
    },1000)
})
promiseThree.then(function(user){
console.log(user);

})

//step 4
const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
  let error=false
  if(!error){
    resolve({userName:"abhi",Enail:"abhi@gmail.com"})
  }else{
    reject('Error:something went Wrong')

  }
},1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.userName
    
}).then((username)=>{
console.log(username);

}).catch((error)=>{
console.log(error)
}).finally(()=>{
    console.log("The promise is rejectect")
})

//promise 5
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"Abhishek",email:"abhi@gmail.com"})
        }else{
            reject("Error:Js Wrong")
        }
    },1000)
})
//different approach
async function consumedPromiseFive(){
  try {
     const response= await promiseFive
   console.log(response); 
  } catch (error) {
    console.log(error);
    
  }  
}
consumedPromiseFive()
//Details

// async function getAllUsers() {
// try {
//       const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     //  console.log(response);
      
//   const data= await response.json()
//   console.log(data); 
// } catch (error) {
//     console.log("E:error",error);
    
// }
// }

// getAllUsers()

//
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))
