console.log('hello bro');
let x = 5;
x++;
console.log(x);
// alert("wassup gg")
x = null; 
y = undefined; 
console.log(x)
console.log(y)
x = true;
// always use camelCase because beautiful

// let, const, var

// let - variable can't be re-declared but can be updated. block scope.
let namea = "tony"
console.log(namea);
// let namea  = 34; redeclaring not possible

//var - variables can be re-declared and updated. global scope.
var joe = 1;
var joe = 34;

//const - variable can't be re-declared or updated. block scope.
 let a;
//  by default undefined
// const b; error

// DATATYPES, number, string, boolean, undefined, null, BigInt, Symbol (7 primitive data types)

let am = BigInt("123214134324324324324");
let bam = Symbol("a$")

console.log(typeof(am));


// objects

const student = {
    name: "Rithwik",
    age : 25,
    cgpa : 4.0

};
// for const object, we can update their keys

console.log(student["name"]);
console.log(typeof student);

// to access key in objects, either use object.key, or object["key"]


// operators
// modulus - %, exponent - **, ++, --

const isRaining = false;
let numberOfUmbrellas = null; 
if(isRaining) {

}
else if (isRaining) {

}
else {

}

// ternary operator
// age>18 ? "adult":"not adult";

// LOOPS

for (let i=3;i<=5;i++) {
    console.log(i);
}

let num =5;
while(num>1){
    console.log("happy",num)
    num--;
}
do {

} while (x==3);


// for-of loop, used with strings, arrays

arr =[1,2,3,4,5];
for(let val of arr){
    console.log(val);
}
let string= "bro";
for (let joe of string){
    console.log(joe)
}

// for in loop ->object keys, objects, also use arrays indices, so in is used for keys and not values

// STRINGS

let fullName = "Joshua Digger";
console.log(fullName.length);
console.log(fullName[0])
let joshua = `Hello there my name is ${fullName}`; //usebackticks for template literals
console.log(joshua);

// METHODS
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.trim())
console.log(fullName.charAt(0));
console.log(fullName.replace('J','B'));
console.log(fullName.slice(0,5));
str1 = "a"
str2 = "b"
// str1.concat(str2);
console.log(str1.concat(str2));


//arrays
let heroes = ['aubhav','anubhav'];
console.log(heroes[1]);
// of gives the values of array, in gives the index of the array
for (hero of heroes){
    console.log(hero);
}

//array functions:
heroes.push(5);
for (hero of heroes){
    console.log(hero);
}

console.log(heroes.pop());
// removes the last element and returns the value







// converts to string and separates by commas
a = heroes.toString();
console.log(typeof a);
console.log(a[6]);
console.log(heroes.toString());
// concat()

heroes.push(11);


//adds to start
heroes.unshift(5);

heroes.shift();//deletes from the start

for (hero of heroes){
    console.log(hero);
}

console.log("here")

console.log(heroes.slice(1,2))