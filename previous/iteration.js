//for loop
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element===5){
       // console.log("5 print")
    }
   // console.log(element);   
}


for (let i = 0; i <=10; i++) {
   //console.log(`outer loop value =${i}`)
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value =${j} and inner loop= ${i}`)
        //console.log(i +'*'+ j +'='+i*j); 
    }   
}

let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
}

//break and continue

// for (let i = 0; i <=20; i++) {
//     if(i===5){
//         console.log("detct 5")
//         break
//     }
//     console.log(`the value of is ${i}`);
// }
for (let i = 0; i <=20; i++) {
    if(i===5){
        console.log("detct 5")
        continue
    }
    //console.log(`the value of is ${i}`);
}
//do-while--loop
let i=0
while (i<=10) {
    //console.log(`value of index ${i}`)   
    i=i +2
}

let myarray=["flashman","batman","array"]
arr=0
while (arr<myArray.length) {
    //console.log(`the value of my array ${myArray[arr]}`);
    arr=arr+1 
}


let score=1
do {
    console.log(`the value of score is ${score}`);
    score++;
    
} while (score<=10);