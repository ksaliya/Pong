function Ball(){
	this.r = 6;
	this.position = createVector(width/2, height/2);
	this.dir = [-4, 4];
	this.speed = createVector(random(this.dir),random(1,5));

	this.show = function(){
		fill(255);
		this.update();
		ellipse(this.position.x, this.position.y, 2*this.r, 2*this.r);
	}

	this.update = function(){
		this.edge();
		this.position.add(this.speed);
	}

	this.edge = function(){
		if(this.position.y > height - this.r || this.position.y < this.r){
			this.speed.y *= -1;
		}

		if(this.position.x + this.r < 0){
			rightscore++;
			scored = !scored;
			this.reset();
		}

		if(this.position.x - this.r > width){
			leftscore++;
			scored 	= !scored;
			this.reset();
		}
	}

	this.hitPaddle = function(p, lor){
		var y_match = this.position.y + this.r < p.y + p.w/2 && this.position.y - this.r > p.y - p.w/2;
		if(y_match){
			if(lor == 'l' && this.position.x - this.r < p.x + p.h/2){
				this.speed.x *= -1;
			}
			else if (lor == 'r' && this.position.x + this.r > p.x - p.h/2){
				this.speed.x *= -1;
			}
		}
	}

	this.reset = function(){
		this.position = createVector(width/2, height/2);
		this.dir = [-4, 4];
		this.speed = createVector(random(this.dir),random(1,5));
	}
}