


function randomToFive(){
	return Math.floor(Math.random()*5);

}


var d = function decrease(){
	console.log("decrease invoke");
}

var i = function increase(){
	console.log("increase invoke");
}

function randomPower(color){
	return types[color]();

}

// i and d are the functions vars
var types = {"blue":i,"red":d,"black":i,"darkviolet":d,"violet":i};

 function randomcolor(){
 	var randNum = randomToFive();
	var key = Object.keys(types)[randNum];
	 return key;

}

function crashLimits(snakeBody,foodPosition){
	for (var i = 0; i < snakeBody.length; i++) {
		if(snakeBody[0].equals(foodPosition)){
			return true;
		}
	}
	return false;

}
//================================================================FOOD=====================


function food(){

this.draw = function(snakeBody){

	this.position = randomPosition();
	while(crashLimits(snakeBody,this.position)){
		this.position = randomPosition();
	}

	this.color = randomcolor();
	this.power = randomPower(this.color);
	this.position.drawFood(this.color);
	return this.position;
}




}//end of food







 function randomPosition(){

	var random = Math.floor(Math.random()*870); 
	var modulu = random%20;
	var randomX = random - modulu;


	random = Math.floor(Math.random()*380); 
	modulu = random%20;
	var randomY = random - modulu;

	return new position(randomX,randomY); 

}
