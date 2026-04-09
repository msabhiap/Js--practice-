//const descript=Object.getOwnPropertyDescriptor(Math,'PI')
//console.log(descript);

// console.log(Math.PI);
//factory function

// const news=Object.create(null)
const chai={
    name:'chai',
    sathi:'churot',
    price:200,
    isAvailable:true,

    orderChai:function(){
        console.log("not order");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value]of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
    }
    
    
}