function Paddle(side){
	this.w = 60;
	this.h = 5;
	if(side === 'r'){
		this.x = width - 2*this.h;
	}
	else if(side === 'l'){
		this.x = 2*this.h;
	}
	this.y = height/2;

	this.show = function(){
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, this.h, this.w);
	}

	this.move = function(dir){
		this.y += 5*dir;
		this.y = constrain(this.y, this.w/2, height-this.w/2);
	}

	this.reset = function(){
		this.y = height/2;
	}
}