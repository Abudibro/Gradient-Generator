var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");



function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient() {

	var number1One = Math.floor(Math.random()*255) + 1;
	var number1Two = Math.floor(Math.random()*255) + 1;
	var number1Three = Math.floor(Math.random()*255) + 1;
	var number2One = Math.floor(Math.random()*255) + 1;
	var number2Two = Math.floor(Math.random()*255) + 1;
	var number2Three = Math.floor(Math.random()*255) + 1;



	body.style.background = "linear-gradient(to right, " + "rgb(" + number1One + ", " + number1Two + ", " + number1Three + ")"+ ", rgb(" + number2One + ", " + number2Two + ", " + number2Three + "));";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);

var number1One = Math.floor(Math.random()*255) + 1;
var number1Two = Math.floor(Math.random()*255) + 1;
var number1Three = Math.floor(Math.random()*255) + 1;
var number2One = Math.floor(Math.random()*255) + 1;
var number2Two = Math.floor(Math.random()*255) + 1;
var number2Three = Math.floor(Math.random()*255) + 1;

console.log(body.style.background = "linear-gradient(to right, " + "rgb(" + number1One + ", " + number1Two + ", " + number1Three + ")"+ ", rgb(" + number2One + ", " + number2Two + ", " + number2Three + "));");



// var random = Math.floor(math.random()*255) + 1;
// console.log(random);