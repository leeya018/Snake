


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
//================================================================FOOD=====================
var food1 = new food();

function food(){

this.draw = function(){
	this.position = randomPosition();
	this.color = randomcolor();
	this.power = randomPower(this.color);
	this.position.drawFood(this.color);
}




}//end of food





 function randomPosition(){

	var random = Math.floor(Math.random()*870); 
	var modulu = random%10;
	var randomX = random - modulu;


	random = Math.floor(Math.random()*380); 
	modulu = random%10;
	var randomY = random - modulu;

	return new position(randomX,randomY); 

}