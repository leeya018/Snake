var step = 20;
var buttNum;
var snake1 = new snake("green");

function snake(color){
	this.color = color;
	this.direction=0; //1-left  2-up 3-right 4-down
	this.food;

	this.arraySnake = [];



	this.canSnakeEat = function(){

		switch(this.direction){
			case 1://left
			return canSnakeEatLeft(this.arraySnake[0],this.food);
			break;

			case 2://up
			return canSnakeEatUp(this.arraySnake[0],this.food);

			break;

			case 3://right
			return canSnakeEatRight(this.arraySnake[0],this.food);

			break;

			case 4://down
			return canSnakeEatDown(this.arraySnake[0],this.food);

			break;

		}

	}

	this.createFood = function(){
		var foodTemp = new food();
		this.food =  foodTemp.draw(this.arraySnake);

	}

	this.increaseSizeByOne = function(){
		var head = this.arraySnake[0];
		var x;
		var y;

		switch(this.direction){
			case 1://left
			x = head.x +step;
			y= head.y;
			break;

			case 2://up
			x = head.x ;
			y= head.y -step;
			break;

			case 3://right
			x = head.x -step;
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
			this.increaseSizeByOne();
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

	this.moveRight = function(){
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = tempPos.x+step;
		var y = tempPos.y;
		this.replacePosition(x,y);

	}

	this.moveLeft = function(){
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = tempPos.x-step;
		var y = tempPos.y;
		this.replacePosition(x,y);
	}


	this.moveUp = function(){
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = tempPos.x;
		var y = tempPos.y-step;
		this.replacePosition(x,y);
	}

	this.moveDown = function(){
		this.eatingCheck();
		var tempPos = this.arraySnake[0];
		var x = tempPos.x;
		var y = tempPos.y+step;
		this.replacePosition(x,y);
	}

	this.draw = function(){

		for (var i = 0; i <this.arraySnake.length; i++) {
			this.arraySnake[i].draw(this.color);
		}



	}

	
}




