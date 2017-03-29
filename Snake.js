
// var s.snake = new snake("green",1);

function snake(color,level){
	this.color = color;
	this.level = level;
	this.speed = 100;
	this.direction=0; //1-left  2-up 3-right 4-down
	this.barrier=[];
	this.food;
	this.score=0;
	this.goal = goalPoints[level-1];
	$("#score").text(this.score);
	$("#goal").text(this.goal);
	$("#level").text(this.level);

	this.intervalFood = setInterval(createFood,foodAppearIntervalSpeed);

	this.arraySnake = [];



	this.canSnakeEat = function(){

		switch(this.direction){
			case 1://left
			return canSnakeEatLeft(this.arraySnake[0],this.food.position);
			break;

			case 2://up
			return canSnakeEatUp(this.arraySnake[0],this.food.position);

			break;

			case 3://right
			return canSnakeEatRight(this.arraySnake[0],this.food.position);

			break;

			case 4://down
			return canSnakeEatDown(this.arraySnake[0],this.food.position);

			break;

		}

	}


	this.increaseSizeByOne = function(){
		var head = this.arraySnake[0];
		var x;
		var y;

		switch(this.direction){
			case 1://left
			x = head.x -step;
			y= head.y;
			break;

			case 2://up
			x = head.x ;
			y= head.y -step;
			break;

			case 3://right
			x = head.x +step;
			y= head.y;
			break;

			case 4://down
			x = head.x;
			y= head.y+step;
			break;


		}
		var newBut = $('<button></button>');
		var name = "snake_butt"+buttNum;
		newBut.attr({id:name});
		$('#main').append(newBut); // add it to main div
		var newPos = new position(x,y,newBut);
		this.arraySnake.unshift(newPos);
		buttNum++;
		this.draw();

	}



	this.buildBody = function(){
		buttNum=10;
		var startX= 500;
		var startY= 200;
		for (var i = 0; i <buttNum ; i++) {
			var newBut = $('<button></button>');
			var name = "snake_butt"+i;
			newBut.attr({id:name});


			this.arraySnake.push(new position(startX -i*20,startY,newBut));
			this.arraySnake[i].draw(this.color);
			$('#main').append(newBut); // add it to main div
		}

	}


	this.eatingCheck = function(){
		console.log("head position : "+ this.arraySnake[0].x+ ", "+this.arraySnake[0].y);
		if(this.canSnakeEat()){
			console.log("I can eat"+ this.direction);
			// this.increaseSizeByOne();
			this.food.randomPower();
			this.food.delete();
			s.checkIfLevelFinish();

		}
	}




//add new item to the head and remove last
this.replacePosition = function(x,y){
	// console.log("snake head :    "+this.arraySnake[0],x+","+this.arraySnake[0],y);
		var rem = this.arraySnake.pop();// delete from end
		var newPos = new position(x,y,rem.butt);
		this.arraySnake.unshift(newPos);//add as first item 

		this.draw();

	}


	this.checkCrushInTail = function(){
		for (var i = 1; i < this.arraySnake.length; i++) {
			if(this.arraySnake[0].equals(this.arraySnake[i])){
				alert("game over");
				return true;
			}
		}
		return false;
	}

	this.checkCrushInBarrier = function(){
		for (var i = 0; i < this.barrier.length; i++) {
			if(this.arraySnake[0].equals(this.barrier[i])){
				alert("stuck in Barrier");
				return true;
			}
		}
		return false;

	}

	this.moveRight = function(){
		var ans= this.checkCrushInTail();
		this.checkCrushInBarrier();
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = (tempPos.x+step)%widthScreen;
		var y = tempPos.y;
		this.replacePosition(x,y);

	}

	this.moveLeft = function(){
		this.checkCrushInTail();
		this.checkCrushInBarrier();
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = (tempPos.x-step)%widthScreen;
		if(x<0){
			x+=widthScreen;
		}
		var y = tempPos.y;
		this.replacePosition(x,y);
	}


	this.moveUp = function(){
		this.checkCrushInTail();
		this.checkCrushInBarrier();
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = tempPos.x;
		var y = (tempPos.y-step)%heightScreen;
		if(y<0){
			y+=heightScreen;
		}
		this.replacePosition(x,y);
	}

	this.moveDown = function(){
		this.checkCrushInTail();
		this.checkCrushInBarrier();
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = tempPos.x;
		var y = (tempPos.y+step)%heightScreen;
		this.replacePosition(x,y);
	}

	this.draw = function(){

		for (var i = 0; i <this.arraySnake.length; i++) {
			this.arraySnake[i].draw(this.color);
		}



	}

	this.destroy = function(){
		for (var i = 0; i < this.arraySnake.length; i++) {
			this.arraySnake[i].butt.remove();	
		}

	}

	
}

//=============================================================

var intervalId;
		// var intervalFood = setInterval(s.snake.createFood,2000);
		$(document).keydown(function(e) {
	 // alert((e.keyCode));
	 $("#instructionRel").css("visibility","hidden");
	 switch(e.which) {

        case 37: // left
        clearInterval(intervalId);
        intervalId= setInterval(moveLeftInterval,s.snake.speed);
        break;

        case 38: // up
        clearInterval(intervalId);
        intervalId = setInterval(moveUpInterval,s.snake.speed);
        break;

        case 39: // right
        clearInterval(intervalId);
        intervalId = setInterval(moveRightInterval,s.snake.speed);
        break;

        case 40: // down
        clearInterval(intervalId);
        intervalId = setInterval(moveDownInterval,s.snake.speed);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});



		function createFood (){


			s.snake.food = new food();
			while(s.snake.food.crashLimits())
			{
				s.snake.food = new food();
			}
			s.snake.food.draw();

		}



		// function checkIfLevelFinish(snake){
		// 	console.log("snake score :" +snake.score);
		// 	if( snake.score == goalPoints[snake.level-1]){
		// 		var s.snake = new snake("green",snake.level + 1);
		// 	} 

		// }

