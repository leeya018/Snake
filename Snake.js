var step = 10;
var snake1 = new snake("green");

function snake(color){

	// this.snakeBody = this.buildBody();
	this.position = new position(500,200);
	this.color = color;


	// this.buildBody = function(){
	// 	var arraySnake = [];
	// 	for (var i = 0; i <10 ; i++) {
			
	// 	}

	// }

	this.replacePosition = function(x,y){
		this.position = new position(x,y);
		this.draw();

	}

	this.moveRight = function(){
		var x = this.position.x+step;
		var y = this.position.y;
		this.replacePosition(x,y);

	}

		this.moveLeft = function(){
		var x = this.position.x-step;
		var y = this.position.y;
		this.replacePosition(x,y);
	}


		this.moveUp = function(){
		var x = this.position.x;
		var y = this.position.y-step;
		this.replacePosition(x,y);
	}

		this.moveDown = function(){
		var x = this.position.x;
		var y = this.position.y+step;
		this.replacePosition(x,y);
	}

	this.draw = function(color){
		this.position.draw(color);


	}

	
}




