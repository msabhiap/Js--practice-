const arr=[9,25,69]
console.log(...arr);

const arr2=[1,2,3,4]
const copy=[...arr]
copy.push(5)
const merge=[...arr,8,...arr2]
console.log(merge);

console.log(copy);
const name="abhi"
const char=[...name]
console.log(char);

//pased array elems as arguments

function addNum(a,b,c){
    return a+b+c;
}
const nums=[1,2,3]
console.log(addNum(...nums));

