var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
	//sprawdzanie easy lub hard mode
	modeSetupButton();
	// sprawdzanie kliknietego kwadratu
	modeClickButton();
	// restart
	resetMode();
}

function modeSetupButton() {
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click", function() {
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === 'Easy' ? numSquares = 4 : numSquares = 6;
			resetMode()
		});
	};
}

function modeClickButton() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var selected = this.style.backgroundColor;
			if (selected === pickedColor) {
				message.textContent = "correct";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				reset.textContent = "New Game";
			} else {
				this.style.backgroundColor = '#232323';
				message.textContent = "try again";
			}
		});
	};
}

function resetMode() {

	colors = randomSquareColors(numSquares);
	pickedColor = randomColor();
	//przypisanie tekstu rgb w html
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	reset.textContent = "New colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
 			squares[i].style.backgroundColor = colors[i];
 		} else {
 			squares[i].style.display = 'none';
 		}
	}
	h1.style.backgroundColor = 'steelblue';
}

reset.addEventListener("click", function(){
	resetMode();
});

// funkcja przypisująca trafiony kolor do wszystkich kwadratów
function changeColors(color) {
	for(var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	};
}

//funkcja losująca kolor do trafienia
function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//funkcja przypisująca kolor rgb do tablicy kolorów
function randomSquareColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomSquareColor());
	}
	return arr;
}

//funkcja tworząca losowy kolor rgb
function randomSquareColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}