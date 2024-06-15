//change in state of any object is called event

// EVENT HANDLING:
/*
node.event = ()=>{
    }
*/
let button = document.querySelector("button");
// button.onclick = (e)=>{
//     console.log("ok bro why u click me tho");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }
// button.ondblclick = ()=>{
//     console.log("bro u clicked me twice");
// }

//event object -> object that has details about the event.
/*
node.event = (e) => {
    e.target
    e.type
    e.clientX
    e.clientY
    }
*/

//NEW WAY OF EVENT HANDLING - EVENT LISTENERS:
/*
node.addEventListener(event, callback)
node.removeEventListener(event, callback)
*/
//WHY THIS -> CAN USE MULTIPLE FUNCTIONS WITH THIS!!!

button.addEventListener("dblclick", (e)=>{
    console.log("I was clicked bro! twice")
});
function wasClicked(){
    console.log("BRO WHY CLICKED")
}
button.addEventListener("click", wasClicked);
button.removeEventListener("click",wasClicked);