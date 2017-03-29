var s;
var step = 20;
var buttNum;
var foodAppearIntervalSpeed = 5000;


function stage(stageNum){
	this.stageNum = stageNum;
	this.snake = new snake("green",1);
	this.snake.buildBody();
	this.barrier= [];


	this.checkIfLevelFinish = function(){
			console.log("snake score :" +this.snake.score);
			if( this.snake.score == goalPoints[this.snake.level-1]){
				this.snake.destroy();
				clearInterval(this.snake.intervalFood);
				this.snake = new snake("green",this.snake.level + 1);
				this.snake.buildBody();
			} 

		}
}




var goalPoints = [3,6,9,10];



//====================================================================================

var type1 = [];
var type2 = [];
var type3 = [];
var type4 = [];

type1.push({"orange":iso});

type2.push({"orange":iso});
type2.push({"orange":iso});
type2.push({"orange":iso});
type2.push({"black":bs});


type3.push({"orange":iso});
type3.push({"orange":iso});
type3.push({"orange":iso});
type3.push({"yellow":isd});
type3.push({"black":bs});

type4.push({"orange":iso});
type4.push({"orange":iso});
type4.push({"orange":iso});
type4.push({"orange":iso});
type4.push({"yellow":isd});
type4.push({"black":bs});
type4.push({"blue":cst});



// {"orange":iso,"orange":iso,"orange":iso,"black":bs,"orange":iso,"orange":iso,"orange":iso};
// var type3 = {"blue":cst,"yellow":isd,"orange":iso,"black":bs,"orange":iso,"orange":iso,"orange":iso};


var types=[];
types.push(type1);
types.push(type2);
types.push(type3);
types.push(type4);

var time = [];




var temp =[]
temp.push({"orange":iso});
temp.push({"orange":iso});