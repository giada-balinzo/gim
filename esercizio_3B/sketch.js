let level = 0;
let emptying = false;
let emptyProgress = 0;
let lastMinute = -1;

let levelOre = 0;        
let emptyingOre = false; 
let emptyProgressOre = 0;
let lastHour = -1;       


let levelSecondi = 0;
let emptyingSecondi = false;
let emptyProgressSecondi = 0;
let lastSecond = -1;


function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(RADIANS)


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)


}

function draw() {
	background(200);
	noStroke();

	translate(width/2, height/2)

	let h = hour();
	let mn = minute();
	let sc = second();




	let angoloSecondiRosa = map(sc, 0, 60, 0, TWO_PI);
	fill(255, 105, 180, 150); 
	arc(0, 0, 440, 440, -HALF_PI, -HALF_PI + angoloSecondiRosa, PIE);


	if (h !== lastHour) {
		lastHour = h;
		emptyingOre = true;
		emptyProgressOre = 0;
	}
	if (!emptyingOre) {
		levelOre = (h % 12 + mn / 60) / 12;  
	}
	if (emptyingOre) {
		emptyProgressOre += 0.02;
		levelOre = lerp(levelOre, 0, emptyProgressOre);
		if (emptyProgressOre >= 1) {
			emptyingOre = false;
			levelOre = 0;
		}
	}



	


	if (mn !== lastMinute){
		lastMinute = mn
	}

	if (mn === 0) {
		emptying = true;
		emptyProgress = 0;
	}

	if (!emptying) {
		level = mn / 60;
	}




	if (emptying) {
		emptyProgress += 0.02;
		level = lerp(level, 0, emptyProgress);
		if (emptyProgress >= 1) {
			emptying = false;
			level = 0;
		}
	}

	if (sc !== lastSecond) {
		lastSecond = sc;
		emptyingSecondi = true;
		emptyProgressSecondi = 0;
	  }
	  if (!emptyingSecondi) {
		levelSecondi = sc / 60;
	  } else {
		emptyProgressSecondi += 0.05;
		levelSecondi = lerp(levelSecondi, 0, emptyProgressSecondi);
		if (emptyProgressSecondi >= 1) {
		  emptyingSecondi = false;
		  levelSecondi = 0;
		}
	}

	
	



	
	noStroke();
	fill(100, 180, 255, 180); 
	arc(0, 0, 420, 420, -HALF_PI, -HALF_PI + level * TWO_PI, PIE);


	noStroke();
	fill(0, 255, 0, 100);
	arc(0, 0, 380, 380, -HALF_PI, -HALF_PI + levelOre * TWO_PI, PIE);



	stroke(0);
	for (let i = 0; i < 60; i++) {
		push();
		rotate(i * TWO_PI / 60);
		
		if (i % 5 === 0) {
			strokeWeight(3);  
			line(0, -170, 0, -190);
		} else {
			strokeWeight(1);  
			line(0, -175, 0, -185);
		}
		
		pop();
	}
	








	push();
	const angoloOre = (h % 12 + mn / 60) / 12 * TWO_PI;
	rotate(angoloOre);
	noStroke(); 
	fill(0);
	rect(-10, 20, 20, -110);
	pop();

	



	push()
	const m = minute()
	const angoloMinuti = minute() / 60 * TWO_PI
	rotate(angoloMinuti)
	noStroke(); 
	fill(0)
	rect(-8, 20, 16, -150)
	pop()
	

	push()
	
	const angoloSecondiLancetta = (sc / 60) * TWO_PI;
	rotate(angoloSecondiLancetta);
	noStroke(); 
	fill(128);
	rect(-4, 25, 8, -200);
	
	pop();

	//ellipse(width/2, height/2, 100)

	
	
	


	//fill (255)
	//ellipse(0, 0, 5)
	
}