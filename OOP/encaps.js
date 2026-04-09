// //using clouser=commonly used to crarte private variables and methods

// function BankAccount(accNum,accHolder,balance){
//     let _accNum=accNum;
//     let _accHolder=accHolder;
//     let _balance=balance;

//     function ShowDetails(){
//         console.log(`Account No:${_accNum}`);
//         console.log(`Account Holder:${_accHolder}`);
//         console.log(`Account Balance:${_balance}`);
        
//     }
//     function deposit(amount){
//         _balance +=amount;
//         ShowDetails();
//     }
        
//     function withDraw(amount){
//     if(_balance>=amount){
//         _balance -=amount;
//         ShowDetails()
//     }else{
//         console.log('insffuicent balance');
        
//     }
   
// }
// /*  return{
//         addMoney:deposit,
//         TakeMoney:withDraw
//     }; */ 
//    /*  return{
//         deposit,withDraw
//     } */
//    return{
//         deposit:deposit,
//         withDraw:withDraw
//     }; 
    

// }
// let myBankAccount = BankAccount("123456", "John Doe", 1000);

// /* myBankAccount.addMoney(500); 
// myBankAccount.TakeMoney(2000);
//  */
// myBankAccount.deposit(500); 
// myBankAccount.withDraw(500);
// let email = "mountain@web.com";
// function maskEmail(email) {
//   const atIndex = email.indexOf("@");
//   console.log(atIndex);
  
//   const username = email.slice(0, atIndex);
//   console.log(username);
  
//   const domain = email.slice(atIndex);
//   console.log(domain)

//   // Using .at() instead of [username.length - 1]
//   const firstChar = username.at(0);
//   const lastChar = username.at(-1); 
  
//   const mask = "*".repeat(username.length - 2);

//   return firstChar + mask + lastChar + domain;
// }

// console.log(maskEmail(email)); // Result: m******n@web.com

let email="abhi@gmail.com"
const firstCharc=email[0];
const lastChar = email[email.length - 1];
console.log(lastChar)
const atIndex=email.indexOf('@')
// console.log(atIndex);
const newEmail=email.slice(0,atIndex)
const lastChar1 = newEmail[newEmail.length - 1];
console.log(lastChar1);
