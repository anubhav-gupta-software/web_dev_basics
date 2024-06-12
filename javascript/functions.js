function printHello(bro) 
{   return bro;
    console.log('Hello World!')
    return 15;
}

x = printHello(69);
console.log(`The value of x is ${x}`);



//arrow functions
//part of modern functions
// mostly use const because you wont be changing the function
const sum = (x,y)=>{
    return x+y;
}
console.log(sum(3,4));
console.log(sum);

const arrowMul = (a,b)=>{
    return a*b;
}
console.log(arrowMul(5,6));



//callback functions - function that is passed as an argument to another function
// arr.forEach(/*callback function*/);

let age = [1,2,3,4,5,6,7];

age.forEach((val)=>{
    console.log(val);
});
// in for each callback function, we can use 3 parameters, value, index, array

age.forEach((val,idx,ar)=>
{
    console.log(val, idx, ar);
});



//Some important array methods

//map method, returns a new array, creates a new one
//the value its callback returns are used to form new array
//the old array remains unchanged
let y = age.map((val)=> {
    console.log(val);
    return val*5;

});

console.log(y);
6

//filter
//creates a new array of elements that give true for a condition;
let newAge = age.filter((val)=>{
    return val%2==0;
});

console.log(age);
console.log(newAge);

//reduce method
//performs operations to reduce the array to a single value

let totalAge = age.reduce((res, curr)=>{
    return res+curr;
});

console.log(totalAge);
//

// let userInput = prompt("Give me your number")
// console.log(userInput); for browser