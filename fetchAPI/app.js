//fetch API provides interface for fetching(sending/receiving) resources.
//api - application programming interface
//let promise = fetch(url, [options])
//fetch uses request and response objects
//when given no options, get request is used...
const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);

// promise.then((res)=>{
//     console.log(res);
// });
// promise.catch((err)=>{
//     console.log("Sorry bro error shown", err);
// });

const getFacts = async () =>{
    para.innerText = "Getting data, wait bro";
    console.log("getting data...")
    try {let response = await fetch(URL);//json format
        console.log(response.status);
        let data = await response.json();
        console.log(data[1]["text"]);
        para.innerText = data[2].text;
    } catch(err) {
        para.innerText = err;
    }
    
};

const checkText = ()=>{
    if (para.innerText == "CLICK BELOW TO GET A RANDOM CAT FACT!!") {
        getFacts();
    }
    else {
        para.innerText = "CLICK BELOW TO GET A RANDOM CAT FACT!!";
    }   
}

para = document.querySelector("#catfacts");
//para.innerText = "wassup bro";

button = document.querySelector("button");

button.addEventListener("click",checkText);




//now we can't see the cat facts -  why?
//understanding terms - ajax, json and json() method

//ajax - async js and xml
//json - javascript object notation

//the response comes in json format, we gotta change it to js object
//.json() returns a second promise, (input is json, output is js object)

//NOTE : JSON() function is also async, so use await or promises
