//insert new elements

let button = document.createElement("button"); //first we create that element
button.innerText='Click Me';

//now to add it to the document, we use node.append(), .prepend(), before(), after()

let div = document.querySelector("div"); //the node , whenever we use this, it returns the Element object
div.append(button);//adds at the end of the node(inside)
div.prepend(button);//adds to the start of the node(inside)

div.before(button);//outside before
div.after(button);//outside after


//deleting new elements
let para  = document.querySelector("p");
para.remove();