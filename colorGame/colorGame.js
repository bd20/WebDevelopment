var numSquares = 6
var colors = generateColors(numSquares)
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
document.getElementById("pickedColor").textContent = pickedColor
var resultDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected")
	numSquares = 3
	colors = generateColors(numSquares)
	pickedColor = pickColor()
	//Set the new colors and text
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i]
		}
		else {
			squares[i].style.display = "none"
		}
	}

})

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares = 6
	colors = generateColors(numSquares)
	pickedColor = pickColor()
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
		squares[i].style.display = "block"
	}
})

reset.addEventListener("click", function() {
	//Generate new colors and picked colors
	colors = generateColors(numSquares)
	pickedColor = pickColor()
	//Set the new colors and text
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = colors[i]
	}
	document.getElementById("pickedColor").textContent = pickedColor
	//Reset the h1 background
	h1.style.background = "steelblue"
	reset.textContent = "New Colors"
	resultDisplay.textContent = ""
})

for (var i = 0; i < colors.length; i++) {
	//Set color
	squares[i].style.background = colors[i]

	//Add event listener
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background
		if (clickedColor === pickedColor) {
			resultDisplay.textContent = "Correct!"
			changeColors(clickedColor)
			h1.style.background = clickedColor
		}
		else {
			this.style.background = "#232323"
			resultDisplay.textContent = "Try Again!"
		}
	})
}

function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateColors(number) {
	colors = []
	for (var i = 0; i < number; i++) {
		colors.push(getRandomColor())
	}
	return colors
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}