
var buttons;
var rgb, rgbCount;

function showHighScores() {
	buttons = [];
	rgbCount = 0;
	rgb = getRgb(rgbCount);
	createCanvas(window.innerWidth, window.innerHeight - 4);
	noStroke();
	frameRate(60);
	background(0);
	fill(255, 0, 0);
	stroke(0);
	rect(width / 4, height / 4, width / 3, height / 2);
	buttons.push(new Button(20, 20, 300, 70, "test"));
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].diplay()
	}
}

function Button(x, y, width, height, txt) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.txt = txt;

	this.isClicked = function () {

	}

	this.diplay = function () {
		fill(255, 0, 0);
		fill(rgb[0], rgb[1], rgb[2]);
		strokeWeight(4);
		rect(this.x, this.y, this.width, this.height);
		stroke(0);
		fill(0);
		strokeWeight(1);
		textAlign(CENTER, TOP);
		textSize(this.height - 5);
		text(this.txt, this.x + this.width / 2, this.y + this.height / 5);
	}
}