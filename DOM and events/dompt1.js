// DOM MANIPULATION
let heading = document.getElementById("heading");
console.log(heading);
//document.getElementsByClassName("classname") -> returns an html collection, very similar to an array
//document.getElementsByTagName("p") -> again returns html collection

//a better way
//document.querySelector("id,tag, or class");

let elements = document.querySelector("p"); //1st element
console.log(elements);

//for all elements, use querySelectorAll
let elementsAll = document.querySelectorAll("p"); //returns a node list
console.log(elementsAll);
//for class, always use .className




//properties
//tagName: returns tagName
//firstChild, lastChild, children
//innerText - returns text of content as well as children
let bodya = document.querySelector("body");
console.log(bodya.innerText);
//innerHTML - tags along with content in form of a string
//textContent - returns textual content even for hidden elements [for example: visibility:hidden]


