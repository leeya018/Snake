
function moveRightInterval(){
	s.snake.direction =3;
	s.snake.moveRight();
}


function moveUpInterval(){
	s.snake.direction =2;
	s.snake.moveUp();
}


function moveLeftInterval(){
	s.snake.direction =1;
	s.snake.moveLeft();
}


function moveDownInterval(){
	s.snake.direction =4;
	s.snake.moveDown();
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
