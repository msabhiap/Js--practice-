//splice()
/* changes content of an array by removing or adding the elemnt
changining the original one */
const month=["Jan","Feb","Apr","May"]
month.splice(2,0,"MArc")//insert at index2
console.log(month);

month.splice(4,1,"May")

//to insert into last index
const myFish=["angel","shark","bumble","nemo"]
const newFish=myFish.splice(myFish.length,0,"dolphin")
console.log(myFish);

const heros=["marvel","dc","cartton"]
const remove=heros.splice(1,1)
console.log(remove);
console.log(heros);
//remove 2 elemt start from index2

const construction=["building","tower","houses","road","mechs"]
//const removeItems=construction.splice(0,2)
const removeItems=construction.splice(2,0)
console.log(removeItems);

console.log(construction);
//splice with spread

const num1=[1,2,6,7]
const insert=[3,4,5]
num1.splice(2,0,...insert)
console.log(num1);
