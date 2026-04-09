
 if (true){
    let a=10;
const b=20;
var c=30;

 }
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const userName1="abhi"
    
    function two(){
        const website="youtube"
        //console.log(userName1);
        
    }
   // console.log(website);
    two()
    
}
one()

if(true){
const userName="abhi"
if(userName==="abhi"){
    const lastName="pandey"
    console.log(userName+lastName);
    
}
//console.log(lastName);

}
//console.log(userName);

//++++imp+++

console.log(addOne(5));

function addOne(num){
    return num+1;

}

addTwo(5)
const addTwo=function(num){
    return num+2;
}