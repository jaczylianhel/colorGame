var colors = randomSquareColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var pickedColor = randomColor();
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");


reset.addEventListener("click", function(){
	//generowanie nowych kolorów w kwadratach
	colors = randomSquareColors(6);
	//generowanie nowego koloru do trafienia
	pickedColor = randomColor();
	//przypisanie tekstu rgb w html 
	colorDisplay.textContent = pickedColor;
	//zmiana aktualnych kwadratów na nowe kolory
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = '#232323';
	message.textContent = "";
	reset.textContent = "New colors";

});

//przypisanie tekstu rgb w html
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
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
}
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