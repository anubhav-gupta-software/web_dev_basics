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

