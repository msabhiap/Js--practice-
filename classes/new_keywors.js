  // function mulitplybyFive(num){
  //   return num*5
  // }
  // mulitplybyFive.power=2
  // console.log(mulitplybyFive(3));
  // console.log(mulitplybyFive.power);
  // console.log(mulitplybyFive.prototype);
  
  function createUser(username,score){
    this.username=username;
    this.score=score
  }
   createUser.prototype.increment=function(){
    this.score++
   }
   createUser.prototype.print=function(){
    console.log(`print the score${this.score}`);
    
   }
   const newly=new createUser("asbhi",250)
   const newOne=new createUser("sam",150)

   
   //Array
   newly.print()
   Date.prototype.toSqlDate = function() {
  return this.toISOString().slice(0, 19).replace('T', ' ');
};

const now = new Date();
console.log(now.toSqlDate()); // "2026-04-08 11:26:36"