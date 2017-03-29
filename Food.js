


function randomToFive(){
	return Math.floor(Math.random()*Object.keys(types).length);

}


var cst = function cutSnakeByThree(){
	for (var i = 0 ; i<3 ; i++) {
		var rem = snake1.arraySnake.pop();
		rem.butt.remove();
	}
	console.log("cut the snake");
}

var isd = function increaseSpeed(){
	console.log("increase speed");
	snake1.speed = snake1.speed-10;
	
}

var iso = function increaseSizeByOne(){
	snake1.increaseSizeByOne();

}

var bs = function barrierSnake(){
	var barrier=[];
	for (var i = 0 ; i<3 ; i++) {
		snake1.barrier.push(snake1.arraySnake.pop());
	}
	console.log("barrier snake");

}


var types = {"blue":cst,"yellow":isd,"orange":iso,"black":bs,"orange":iso,"orange":iso,"orange":iso};

function randomcolor(){
	var randNum = randomToFive();
	var key = Object.keys(types)[randNum];
	return key;

}

//================================================================FOOD=====================
var widthScreen = 870;
var heightScreen = 380;

function food(){
	this.position = randomPosition();

	this.draw = function(){

		this.color = randomcolor();
	
	this.position.drawFood(this.color);
}

this.crashLimits = function(){
	return this.crashSnake() && this.crashBarrier();


}

this.crashSnake = function(){
	for (var i = 0; i < snake1.arraySnake.length; i++) {
		if(snake1.arraySnake[0].equals(this.position)){
			return true;
		}
	}
	return false;

}

this.crashBarrier = function(){
		for (var i = 0; i < snake1.barrier.length; i++) {
		if(snake1.barrier[0].equals(this.position)){
			return true;
		}
	}
	return false;

}

this.randomPower = function(){
	 types[this.color]();

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
