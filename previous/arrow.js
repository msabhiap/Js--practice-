const user={
    userName:"abhi",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.userName}welcome to Website`);//refer current context
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()
//console.log(this)

// function one(){
//     let username="abhi"
//     console.log(this.username)
// }
// one();

//using arrow function to declare
const one=()=>{
    let username="abhi"
    // console.log(this)

}
//()=>{} basice arrow  explict return
    const addTwo=(num1,num2)=>{
        return num1+num2

    }
//    console.log( addTwo(3,5))

   //implict return
   const addOne=(ab,cd)=>(ab+cd)
//   console.log( addOne(1,2));
  
  //return object
  const name=()=>({username:"abhi"})
  //console.log(name());

  const myarr=[2,42,42]
  myarr.forEach=()=>{
    q
  }
  
  
