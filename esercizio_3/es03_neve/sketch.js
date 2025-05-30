let fiocchi




function setup() {
	createCanvas(windowWidth, windowHeight)

	fiocchi = []


	
	for(let i=0; i<300; i++){
	fiocchi[i] = {
		px : random(0, width),
		py : random(-100),
		dim : random(15, 35),
		vel : random(1, 3)
		
	
		}
	}
	


}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {


	background(0)

	
	textAlign(CENTER, CENTER)

	for(let i=0; i<fiocchi.length; i++){
	fiocchi[i].px = fiocchi[i].px + random(-1.5, 1.5)
	fiocchi[i].py = fiocchi[i].py + fiocchi[i].vel

	if(fiocchi[i].py > height){
		fiocchi[i].py = 0
		
		
	}

	let d = dist(mouseX, mouseY, fiocchi[i].px, fiocchi[i].py);
	if (d < 100) {
  		let angle = atan2(fiocchi[i].py - mouseY, fiocchi[i].px - mouseX);
  		fiocchi[i].px += cos(angle) * 3;
  		fiocchi[i].py += sin(angle) * 3;
	}



	


	fill(random (255), random (255),random (255))
	textSize(fiocchi[i].dim);
	text("❄", fiocchi[i].px, fiocchi[i].py)
	

}



}

//❄




