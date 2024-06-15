// whenever we create an alert or promt, it temporarily pauses the execution and waits... for Ok or input


// To ensure that the JavaScript runs after the entire document 
//is fully loaded, you can wrap your script inside 
//an event listener for the DOMContentLoaded event. This event fires when the initial 
//HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.


// document.addEventListener("DOMContentLoaded", function() {
//     alert('The document is fully loaded');
//     // Your other JavaScript code here
// });


alert("Hello Bro") ;

// window object represents the open window in a browser, it is not javascript's but browser's object. its a global object with a lot of methods
//automatically created by the broswer
// console.log and alert are also part of window object
window.alert("hello again");

//document is a sub-object of window. it has all the html things
//all the elements of html gets converted into an object in js called document.
/*
window->document->html->...
*/

// console.dir -> shows methods and properties of the document object or any other speical objects

//when a webpage is loaded, the browswer creates a DOM of the page, window->document->html, everything is a node there, child nodes under each



