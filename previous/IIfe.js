//iimediately invoked fucntion expression(IIfe)
// (function one(){
//     //name iifi
//     console.log(`Db coonect`);
// })();
// ((name)=>{
//     console.log(`print the name=${name}`)
// })('abhi')


//chainig method

// const myNUmbers=[1,2,3,4,5,7,8,9,41]
// // const newName= myNUmbers.map((num)=>num+20)
//  const newName=myNUmbers.map((num)=>num*10).map((num)=>num +1)
//  .filter((num)=>num>=30)
//  console.log(newName)

//reduce
const array1=[1,2,3,4,5]
// const total=array1.reduce(function(acc,currVal){
//     console.log(acc);
    
// return acc + currVal
// },0)
// console.log(total);
// const total=array1.reduce((acc,currVal)=>acc+currVal,0)
// console.log(total);

const shoppingcart=[
    {
        itemName:"Skincare",
        price:2000,
    },
    {
        itemName:"hairTreatment",
        price:1000,
    },
    {
        itemName:"Massage",
        price:3000,
    },
]
const totalPrice= shoppingcart.reduce((acc,item)=>acc +item.price,0)
console.log(totalPrice);

