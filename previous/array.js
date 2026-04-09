//array
const myArr = [0,1,2,3,4,5]
const Heroes=["shakitiman","captain"]
const myArr2=new Array(1,2,3,4,5)
// console.log(myArr[0]);
 
//array methodds

// myArr.push(6);
// myArr.pop();//remove last value
// myArr.unshift(0)//add beging the value
// myArr.shift(0);
// console.log(myArr);
// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));


// const newArr=myArr.join()
// console.log(myArr)
// console.log(typeof newArr);

//slice or splice
// console.log("A",myArr);
// const myArr1=myArr.slice(1,3)
// console.log(myArr1);

//splice manuplate orginal array and iclude last range

const marvel_heros=["thor","spdman","thanos"]
const dc=["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros)
// let allHeros=marvel_heros.concat(dc)
//  console.log(universe)

//spread operator
const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros)

//flatt array 

const another_Array=[1,2,3,[4,5,6],7,8,9];
const real_another_array=another_Array.flat(Infinity);
console.log(real_another_array)

//while selecting data =>comes into different fomat like object,node etc

console.log(Array.isArray("Hitesh"))
//from=>convert into array

console.log(Array.from({
    name:"hitesh"
}))

let score=100
let score1=200
console.log(Array.of(score,score1))

//splice
const newArray=["red","black","rjasf","fsaj"]
newArray.splice(0,1)
console.log(newArray);

//replacing/adding new array
const tools=["Hammer","drill"]
tools.splice(1,0,"screDriver")
console.log(tools);
