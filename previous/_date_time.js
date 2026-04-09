// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//  let myCreateddate=new Date(2023,0,23)
// // console.log(myCreateddate.toDateString())

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);//answer in ms value
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate=new Date();
// console.log(newDate)
// console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday:"long",
// })
// console.log(newDate);

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time
console.log(`the loop takes${start-end}ms`)