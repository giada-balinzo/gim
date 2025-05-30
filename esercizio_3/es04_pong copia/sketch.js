let posX, posY
let velX, velY
let ballColor
let ballSize 
let targetSize
let isWhite = true


function setup() {
	createCanvas(500, 400)
	colorMode(HSB, 360, 100, 100)
	noStroke();

	posX=200
	velX=12

	posY=120
	velY=12

	ballColor = color(0, 0, 100);
	ballSize = random(20, 80);
	targetSize = random(5, 50);
	background(0);


}

function draw() {
	let bounced = false;

	


	posX = posX + velX
	posY = posY + velY

	let sizeChangeSpeed = 0.1; 
	ballSize += (targetSize - ballSize) * sizeChangeSpeed;

	if (random(1) < 0.01) {
		targetSize = random(2, 50);

	} 

	
	if (random(1) < 0.1) { 
		isWhite = !isWhite;
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
		ballColor = isWhite ? color(0, 0, 100) : color(0, 0, 0);
		ballSize = random(20, 80);

		let fluoColor = color(random(360), 100, 100);
		background(fluoColor);
	} 
	
	

	fill(ballColor);
	drawStar(posX, posY, ballSize / 2.5, ballSize, 10);

}

function getFluoColor() {
	let hue = random(360);
	return color(hue, 100, 100);
}



function drawStar(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints;
	let halfAngle = angle / 2.0;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}