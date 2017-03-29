var step = 20;
var buttNum;
var snake1 = new snake("green");

function snake(color){
	this.color = color;
	this.speed = 100;
	this.direction=0; //1-left  2-up 3-right 4-down
	this.barrier=[];
	this.food;

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

	this.createFood = function(){


		this.food = new food();
		while(this.food.crashLimits())
		{
			this.food = new food();
		}
		this.food.draw();

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

		if(this.canSnakeEat()){
			console.log("I can eat"+ this.direction);
			// this.increaseSizeByOne();
			this.food.randomPower();
			this.createFood();
		}
	}

//add new item to the head and remove last
this.replacePosition = function(x,y){
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
		for (var i = 1; i < this.barrier.length; i++) {
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

	
}

//=============================================================

var intervalId;
		var intervalFood = setInterval(snake1.createFood,2000);
		$(document).keydown(function(e) {
	 // alert((e.keyCode));
	 $("#instructionRel").css("visibility","hidden");
	 switch(e.which) {

        case 37: // left
        clearInterval(intervalId);
        intervalId= setInterval(moveLeftInterval,snake1.speed);
        break;

        case 38: // up
        clearInterval(intervalId);
        intervalId = setInterval(moveUpInterval,snake1.speed);
        break;

        case 39: // right
        clearInterval(intervalId);
        intervalId = setInterval(moveRightInterval,snake1.speed);
        break;

        case 40: // down
        clearInterval(intervalId);
        intervalId = setInterval(moveDownInterval,snake1.speed);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});




