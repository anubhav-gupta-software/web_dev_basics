//object is an entity having both state and behaviour



//direct way of creating objects
// const student = {
//     fullName: "Anubhav",
//     marks:95,
//     printMarks: ()=> {
//         console.log("marks = ", this.marks);
//         //this means this, for example, this here means the object
//     }

// }

// console.log(student);
// console.log(student.fullName);
// student.fullName = "Joshua";
// console.log(student.fullName);
// student.printMarks();

// //JS objects have a special property called prototype, by default whenever we create an object, another default object is there called prototype

// //as arr is an object, functions like push, pop are from the prototype object

// const Joshua = {
//     salary:5000,
// };

// Joshua.__proto__ = student;


//AND THEN ES6 INTRODUCED CLASSES SYNTAX AND IT IS MORE READABLE AND PREFERRED BY PROGRAMMERS
//classes are a blueprint to create objects
class Car {
    constructor(brand = "default", drive = "default", model = "default"){
        this.brandName = brand;
        this.drive = drive;
        this.model = model;
        console.log(this.brandName,"car created");
    }
    start() {
        console.log(this.brandName,"start");
    }
    stop() {
        console.log(this.brandName,"stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}

mercedes = new Car(); //constructor is automatically invoked by new method
//mercedes.setBrand("merc");
lexus = new Car("lexus","2002","Camry");
//lexus.setBrand("lex");
lexus.start();
mercedes.start(); 

//inheritence, passing down properties and methods from parent class to child class
//method overriding - if child class and parent have same method, child's class will be used.
/*
class Parent {
}
class Child extends Parent {
}
*/
class Toyota extends Car {
    
}

fortuner = new Toyota("Toyota");

//SUPER KEYWORD - used to call the constructor of its parent class to access the parent's properties and methods
//super(args)
//super.parentMethod(args)

class Person {
    constructor(name){
        this.name = name;
    }
}

class Engineer extends Person {
    constructor(name, branch){
        super(name);//to invoke parent class constructor, not sure but done at first 
        this.branch = branch;
        
    }
}

let Abraham = new Engineer("Abraham","Computer Science");

//also for using a function in different functions from parent to child, use super.functionName();

try {
 sdfsfs.logisdfsd;
}catch(err) {
    console.log(err);
    console.log("The above code is bad")
}