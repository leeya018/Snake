
function moveRightInterval(){
	snake1.direction =3;
	snake1.moveRight();
}


function moveUpInterval(){
	snake1.direction =2;
	snake1.moveUp();
}


function moveLeftInterval(){
	snake1.direction =1;
	snake1.moveLeft();
}


function moveDownInterval(){
	snake1.direction =4;
	snake1.moveDown();
}

function canSnakeEatLeft(snakeHead,food){

	return snakeHead.x -20 == food.x && snakeHead.y==food.y;
}

function canSnakeEatUp(snakeHead,food){
	 
	 return snakeHead.x == food.x && snakeHead.y -20 == food.y;
	
}

function canSnakeEatRight(snakeHead,food){

	 return snakeHead.x +20 == food.x && snakeHead.y==food.y;
}

function canSnakeEatDown(snakeHead,food){

	 return snakeHead.x == food.x && snakeHead.y +20 == food.y;
	
}








function CheckIfcrushTheWall(){}

function CheckIfcrushTheTail(){}




function moveRight(){
	// console.log("right");
}

function moveLeft(){}

function moveUp(){}

function moveDown(){}

function oneStepForward(){}

function finishLevel(){}

function fail(){}

function startOver(){}

function nextLevel(){}
