//arrow function one lien execution
const greet=()=>console.log("hello");//stored in variable
let SayHi=greet;//passe as argumnet to toher function
SayHi();//return from other function

//clouser:funvtion remember their scope

function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log(count);  
    }
}
const counter=createCounter();
counter();

//function are object
function example(){}
    example.info="this is me"
    console.log(example.info);
//arrow function
const add=(a,b)=>a+b;
console.log(add(2,3));
//rest parameter
function sum(...addNumbers){
    return addNumbers.reduce((acc,num)=>acc+num,0)
}
console.log(sum(1,2,34,6));

//rHigh order function
function calculation(a,b,operation){
    return operation(a,b)
}
console.log(calculation(5,3,(a,b)=>a+b));

//recursive function
//factorial -ternatary ooperation
function factorial(n){
    return n<=1?1:n*factorial(n-1)
}
console.log(factorial(6));
