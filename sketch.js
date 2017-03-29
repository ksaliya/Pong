var ball;
var paddle;
var leftscore = 0;
var rightscore = 0;
var scored = false;
var old = false;

function setup() {
	createCanvas(600, 500);
	ball = new Ball();
	lPaddle = new Paddle('l');
	rPaddle = new Paddle('r');
}

function draw() {
	background(32, 48, 110);
	line(width/2, 0, width/2, height);
	lPaddle.show();
	rPaddle.show();
	ball.show();
	ball.hitPaddle(lPaddle, "l");
	ball.hitPaddle(rPaddle, "r");
	checkKeyPress();
	someoneScored();
	displayScore();
}

function displayScore(){
	textSize(30);
	textAlign(CENTER);
	text(leftscore, width/2 - 30, 50);
	text(rightscore, width/2 + 30, 50);
}

function checkKeyPress(){
	if(keyIsDown(UP_ARROW)){
		rPaddle.move(-1);
	}
	else if(keyIsDown(DOWN_ARROW)){
		rPaddle.move(1);
	}
	if(keyIsDown(65)){
		lPaddle.move(-1);
	}
	else if(keyIsDown(90)){
		lPaddle.move(1);
	}
}

function someoneScored(){
	if(scored != old){
		rPaddle.reset();
		lPaddle.reset();
		old = scored;
	}
}