function sayMyname(){
    // console.log("abhi")

}
//sayMyname()

//whencer we define the function in parentheis we call it paramerter and 
//when we callv the function value called argument

// function sum(number1,number2){
// console.log(number1+number2);

// }

function sum(number1,number2){
// let result=number1+number2;
// return result;
return number1+number2;
}
const result=sum(2,3);
// console.log(result)

function loginUserMessage(userName="sam"){//default bvalues in parameter
    if(!userName){//check the values
        console.log("pllease enter user name");
        return

    }
return`${userName}  login in`
}
// console.log(loginUserMessage("abhi"));//value overwrite
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1

}
//console.log(calculateCartPrice(200,400,500));
const user={
    userName:"abhi",
    price:200
}
function handleObject(anyObject){
console.log(`username is${anyObject.userName} and price is${anyObject.price}`);

}
//handleObject(user)
handleObject({
    userName:"sam",
    price:200
})

const mynewArray=[200,400,500,300]
function returnThirdArray(getArray){
return getArray[3]
}
// console.log(returnThirdArray(mynewArray));

