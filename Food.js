


function randomToFive(){
	// return Math.floor(Math.random()*Object.keys(types[s.snake.level-1]).length);

	return Math.floor(Math.random()*Object.keys(types[s.snake.level-1]).length);


}



var cst = function cutSnakeByThree(){
	for (var i = 0 ; i<3 ; i++) {
		var rem = s.snake.arraySnake.pop();
		rem.butt.remove();
	}
	s.snake.score = s.snake.score-3;
	$("#score").text(s.snake.score);
	console.log("cut the snake");
}

var isd = function increaseSpeed(){
	console.log("increase speed");
	s.snake.speed = s.snake.speed-10;
	s.snake.score = s.snake.score+2;

	$("#score").text(s.snake.score);
}

var iso = function increaseSizeByOne(){
	s.snake.increaseSizeByOne();
	s.snake.score = s.snake.score+1;
	$("#score").text(s.snake.score);
	console.log("snake score :" +s.snake.score);
}

var bs = function barrierSnake(){
	var barrier=[];
	for (var i = 0 ; i<3 ; i++) {
		s.barrier.push(s.snake.arraySnake.pop());
	}
	s.snake.score = s.snake.score-1;
	$("#score").text(s.snake.score);
	console.log("barrier snake");

}





//================================================================FOOD=====================
var widthScreen = 900;
var heightScreen = 400;

function food(){
	this.randNum;
	this.position = randomPosition();

	this.draw = function(){

		this.color = this.randomcolor();

		this.position.drawFood(this.color);
	}

	this.crashLimits = function(){
		return this.crashSnake() || this.crashBarrier();


	}

	this.crashSnake = function(){
		for (var i = 0; i < s.snake.arraySnake.length; i++) {
			if(s.snake.arraySnake[0].equals(this.position)){
				return true;
			}
		}
		return false;

	}

	this.crashBarrier = function(){
		for (var i = 0; i < s.barrier.length; i++) {
			if(s.barrier[0].equals(this.position)){
				return true;
			}
		}
		return false;

	}

	this.randomPower = function(){
		// types[s.snake.level-1][this.color]();
		types[s.snake.level-1][this.randNum][this.color]();

	}

	this.delete = function(){
		$("#food_butt").css("visibility","hidden");
	}


	this.randomcolor = function (){
		this.randNum= randomToFive();
		var key = Object.keys(types[s.snake.level-1][this.randNum]);
		return key;

	}







}//end of food









function randomPosition(){

	var random = Math.floor(Math.random()*widthScreen); 
	var modulu = random%20;
	var randomX = random - modulu;


	random = Math.floor(Math.random()*heightScreen); 
	modulu = random%20;
	var randomY = random - modulu;

	return new position(randomX,randomY); 

}
