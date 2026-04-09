class abhi{

    constructor(lastName,age){
        this.lastName=lastName;
        this.age=age;
    }
    getDetails(){
        return(`my last name is ${this.lastName} and the age ${this.age}`);
        
    }

}
 const Details=new abhi("pandey",30);
console.log(Details.getDetails());
