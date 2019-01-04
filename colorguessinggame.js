var numSquares = 6;
var generateColors = generateArray(numSquares);
var colorAnswer = answer();
var generateColorQuestion = document.querySelector("#generateNewColor");
var generateColorOptions = document.querySelectorAll(".colorSquare");
var result = document.querySelector("#result");
var guessColor = document.querySelector("#guessColor")
var header = document.querySelector(".header");
var easyButton = document.querySelector("#Easy");
var hardButton = document.querySelector("#Hard");

// giving each button a color value from the array
for(var i = 0; i < generateColorOptions.length; i++) {
	generateColorOptions[i].style.background = generateColors[i];
}

//want to make one of the RGB values created the solution RGB that prints in the beiggining
function generateArray(num) {
	var colorArray = [];

	for(var i = 0; i < num; i++) {
		//random color generated
		colorArray.push(generateRGBNumber());
		//want to always push an array element to be the given RGB value
	}

	return colorArray;
}

function generateRGBNumber() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function answer() {
	//we use generatecolors here since generate is equal to generateRGBNumber which has the the scope of the color array
	var answer = Math.floor(Math.random() * generateColors.length);
	return generateColors[answer];
}

//displaying color answer in the beginning
guessColor.textContent = answer();

//for loop used to have the add event go to all buttons
for(var i = 0; i < generateColorOptions.length; i++) {

// Reminder: generateColorOptions is holding array values
generateColorOptions[i].addEventListener("click", function(){
	if(this.style.backgroundColor === colorAnswer) {
		result.textContent = "Correct!";
		header.style.backgroundColor = this.style.backgroundColor;
		newColorAnswer(generateColorOptions);
		generateNewColor.textContent = "PLAY AGAIN?";
	} 
	else {
		result.textContent = "Try Again"
		this.style.backgroundColor = "#131414";
	}
});

}

function newColorAnswer(){
	for(var i = 0; i < generateColorOptions.length; i++){
		generateColorOptions[i].style.backgroundColor = colorAnswer;
	}
}



generateNewColor.addEventListener("click", function(){
newColor();
});

function newColor() {
numSquares = 6;
generateColors = generateArray(numSquares);
colorAnswer = answer();
guessColor.textContent = colorAnswer;
result.textContent = "";
for(var i = 0; i < generateColorOptions.length; i++) {
	generateColorOptions[i].style.backgroundColor = generateColors[i];
	}
header.style.backgroundColor = "#5783c5";
}

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	result.textContent = "";
	numSquares = 3;
	generateColors = generateArray(numSquares);
	colorAnswer = answer();
	guessColor.textContent = colorAnswer;
	header.style.backgroundColor = "#5783c5";
	for(var i = 0; i < generateColorOptions.length; i++) {
		
			generateColorOptions[i].style.backgroundColor = generateColors[i];
		}
		for(var i = 3; i < generateColorOptions.length; i++) {

			generateColorOptions[i].classList.remove("colorSquare");
		}
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	result.textContent = "";
	numSquares = 6;
	generateColors = generateArray(numSquares);
	colorAnswer = answer();
	guessColor.textContent = colorAnswer;
	header.style.backgroundColor = "#5783c5";
	for(var i = 0; i < generateColorOptions.length; i++) {
			generateColorOptions[i].style.backgroundColor = generateColors[i];
	}
	for(var i = 3; i < generateColorOptions.length; i++) {
		generateColorOptions[i].classList.add("colorSquare");
	}
});