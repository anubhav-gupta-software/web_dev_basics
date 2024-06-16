// async wait > promise chains > callback hell
// console.log(1);
// const hello = ()=> {
//     console.log("hello!")
// }
// setTimeout(hello, 2000);//2000ms = 2s, THIS IS AN ASYNCHRONOUS OPERATION
// console.log(2);
// console.log(3);

// //callback is a function passed as an argument to another function
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }
// calculator(5,6,sum);
// //there are a lot of nesting callbacks in big programs, which leads to callback hell so going to promises


// function getData(dataId, getNextData) {
    
//     setTimeout(()=>{
//         console.log(dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     },2000) ;
    
    
// }

// getData(1, ()=>{
//     getData(2);
// });//this is callback hell, as it would go into getData3 and getData4
// // getData(2);
// // getData(3);


// //DUE TO CALLBACK HELLS, PROMISES ARE USED
// //promises are for eventual completion of task. it is an object in js
// //solution to callback hell


// //promise has 3 states - pending, fulfilled, rejected



// let promise = new Promise((resolve, reject)=> {
//     console.log("Hello");
//     // resolve("success");
//     reject(5);
// });
// promise.then((res)=> {
//     console.log("PROMISE SUCCESSFUL")
//     console.log(res);
// });

// promise.catch((err)=>{
//     console.log("PROMISE REJECTED")
//     console.log(err);
// });
//when we work with api, we just manage the promises, the api sends the promise

// .then() and .catch()
//promise chaining

//now async-await

//async function always returns a promise

async function hello(){
    console.log('hello there!')
}

//await pauses the exection of its surrounding async function until the promise is settled
function api() {
    return new Promise((res,rej)=>{
        setTimeout(()=>{console.log("Weather data")
            res(200);},2000)
        
    })
}

// async function getWeatherdata(){
//     let result = await api();
//     await api();
//     console.log("here");
//     console.log(result);
// }
//await needs to be in a aysnc function

//to avoid unnecessary call, use IIFE: immediately invoked function expression
(async function getWeatherdata(){
    let result = await api();
    await api();
    console.log("here");
    console.log(result);
})();
//iife can only be used once
// (function)(); - also optional, you don't have to write the name of the function