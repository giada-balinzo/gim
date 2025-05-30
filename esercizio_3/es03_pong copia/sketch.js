let posX, posY
let velX, velY
let ballColor
let ballSize 
let targetSize
let isNegative = false


function setup() {
	createCanvas(500, 400)
	colorMode(HSB, 360, 100, 100)
	noStroke();

	posX=200
	velX=8

	posY=120
	velY=8

	ballColor = getFluoColor();
	ballSize = random(20, 80);
	targetSize = random(5, 120);
	background(0);


}

function draw() {
	let bounced = false;

	fill(0, 0, 0, 0.0002); 
	rect(0, 0, width, height);


	posX = posX + velX
	posY = posY + velY

	let sizeChangeSpeed = 0.1; 
	ballSize += (targetSize - ballSize) * sizeChangeSpeed;

	if (random(1) < 0.01) {
		targetSize = random(5, 120);

	}

	
	if (random(1) < 0.005) { 
		isNegative = !isNegative;
	}
	
	if(posX >= width) {
		velX = -velX 
	} else if (posX < 0) {
		velX = -velX
		bounced = true;
		

		}

	if(posY >= height) {
		velY = -velY
	} else if (posY < 0) {
		velY = -velY
		bounced = true;

	}

	if(bounced) {
		ballColor = getFluoColor()
		ballSize = random(20, 80);
	} 
	
	let displayColor = isNegative ? invertColor(ballColor) : ballColor;
	fill(displayColor);

	
	fill(ballColor)
	ellipse(posX, posY, ballSize)

}

function getFluoColor() {
	let hue = random(360);
	return color(hue, 100, 100);
}

function invertColor(c) {
	let h = (hue(c) + 180) % 360;
	let s = saturation(c);
	let b = brightness(c);
	return color(h, s, b);
}