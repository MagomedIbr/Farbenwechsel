const doc = document
const button = doc.getElementById("mybutton")
// function changeBg(e){
// doc.body.background = e;
// console.log("cum")
// }

button.addEventListener("click", function(){
    a = doc.body.style.background;
    doc.body.style.background = 'green';
    console.log("Hello World!", a, b); });

function addItem(){
    
    console.log("cum", doc.body.style);
}
