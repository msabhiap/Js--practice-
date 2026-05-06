function fun(){
    console.log("Hello");
    
}
function fun2(a){
    a();
}
fun2(fun)

//map
const n=[1,23,45,5]
const square=n.map((num)=>num*2)
console.log(square);
console.log(n);


//filter
const e=[1,2,4,6,9,11,5]
const even=e.filter((num)=>num%2===0)
console.log(even);
//reduce
const r=[2,4,56,6]
const sum=r.reduce((acc,curr)=>acc+curr,0)
console.log(sum);

const a = ['10', '20', '30'];
const b = a.map(s => parseInt(s));

console.log(b);

let v=[15,26,25,78,65]
function canVote(age){
    return age>=18;
}
const filterd=v.filter(canVote)
console.log(filterd);

/* array.filter(callback(element, index, arr), thisValue)
 */
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res);

const tags = "sale, electronics, summer";

// We borrow 'filter' to run on the string (after splitting)
const saleTags = Array.prototype.filter.call(tags.split(','), (tag) => 
  tag.trim() === "sale"
);
console.log(saleTags);
// This is the definition of the pipe function
const pipe = (...fns) => (initialValue) => 
  fns.reduce((acc, fn) => fn(acc), initialValue);

// Now your code will work:
const applyDiscount = (price) => price * 0.9;
const addTax = (price) => price * 1.05;
const formatCurrency = (price) => `$${price.toFixed(2)}`;

const getFinalPrice = pipe(applyDiscount, addTax, formatCurrency);

console.log(getFinalPrice(100)); // "$94.50"
