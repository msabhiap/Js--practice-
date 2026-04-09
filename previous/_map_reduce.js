const myNum=[1,2,3,4,5,6,7,8,9]
// //const newNums=myNum.map((num)=>num+10)
// // const newNums=myNum.map((num)=>{
// // return num+10
// // })
// // console.log(newNums) 

// newnum=[]
// myNum.forEach((num)=>{
//     newnum.push(num+10)
// })
// console.log(newnum)

//chainig methodm
const newNums=myNum.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
//console.log(newNums)

//reduce

const mynums=[1,2,3]

// const myTotal=mynums.reduce(function(acc,currVal){
// return acc+currVal;
// },0)
// console.log(myTotal)

const number=mynums.reduce((acc,currVal)=>acc+currVal,0)
//console.log(number)

const shoppingcart=[
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"js python",
        price:29
    },
    {
        itemName:"js fluter",
        price:5000
    },
    {
        itemName:"data",
        price:589
    }
]

const price=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(price)