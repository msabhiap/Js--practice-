const arr=[1,2,4,56,5]
//console.log(arr.slice(2));

// console.log(newarr);

const sliceArray=[2,4,5]
const newSlice=sliceArray.splice(1,0,"2")
console.log(newSlice);
console.log(sliceArray);

//method(callbackFn, thisArg)
function method(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
      // Do something with result; maybe return early
    }
  }
}

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
//   this.category="price"
// }

// console.log(new Food("cheese", 5).name.price);class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Food extends Product {
//   constructor(name, price) {
//     // 'super' does the work of 'Product.call(this, ...)'
//     super(name, price); 
//     this.category = "food";
//   }
// }

// const cheese = new Food("cheese", 5);
// console.log(cheese.name); // "cheese"
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   // A shared method for all Products
//   describe() {
//     return `${this.name} costs $${this.price}`;
//   }
// }

// class Food extends Product {
//   constructor(name, price) {
//     // 1. super() calls the Product constructor
//     super(name, price); 
//     // 2. Add properties unique to Food
//     this.category = "food";
//   }
// }

// const cheese = new Food("cheese", 5);
// console.log(cheese.name);  // "cheese"
// console.log(cheese.price); // 5
// console.log(cheese.describe()); // "cheese costs $5"
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // A shared method for all Products
  describe() {
    return `${this.name} costs $${this.price}`;
  }
}

class Food extends Product {
  constructor(name, price) {
    // 1. super() calls the Product constructor
    super(name, price); 
    // 2. Add properties unique to Food
    this.category = "food";
  }
}

const cheese = new Food("cheese", 5);
console.log(cheese.name);  // "cheese"
console.log(cheese.price); // 5
console.log(cheese.describe()); // "cheese costs $5"
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]