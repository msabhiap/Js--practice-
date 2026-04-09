class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
  this._email=value
    }
}
const newUser=new User("abhi","123")
console.log(newUser.email);
