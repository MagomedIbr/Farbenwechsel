const doc = document
const button = doc.getElementById("mybutton")
const inputText = doc.getElementById("input")
const form = doc.getElementById("form")
cc = inputText.value;
// function changeBg(e){
// doc.body.background = e;
// console.log("cum")
// }
const color = ['green','red','blue','black','yellow','pink','purple','orange','white','grey','lime','lightgreen','tomato','turqoise','aquamarine','brown','coral','chocolate','crimson','cyan','gold','fuchsia','violet','turquoise']


button.addEventListener("click", ()=>{
    const a = doc.body.style.background;
    const randomColor = color[Math.floor(Math.random() * color.length)]; //https://www.delftstack.com/howto/javascript/select-a-random-element-from-an-array-in-javascript/
    doc.body.style.background = randomColor;
    alert("Your Color wil be changed to " + randomColor);
    console.log(randomColor); 
});

form.addEventListener("submit", (e) => {
e.preventDefault();
if(inputText.value=="random"){
    const a = doc.body.style.background;
    const randomColor = color[Math.floor(Math.random() * color.length)]; //https://www.delftstack.com/howto/javascript/select-a-random-element-from-an-array-in-javascript/
    doc.body.style.background = randomColor;
    alert("Your Color wil be changed to a random color");
}else{
alert("Your Color wil be changed to "+inputText.value)
doc.body.style.background = inputText.value;
}})


