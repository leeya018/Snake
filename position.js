var sizeStr ="20px";
// position
function position(xOther,yOther,button){
	this.x=xOther;
	this.y=yOther;
	this.butt = button;


	//this is for the snake 
	this.draw = function(color){
		var xStr = this.x+"px";
		var yStr = this.y+"px";


  		this.butt.css("background-color", color);
	    this.butt.css("position", "absolute");
		this.butt.css("left", xStr);
		this.butt.css("top", yStr);
		this.butt.css("width", sizeStr);
		this.butt.css("height",sizeStr);
		this.butt.css("visibility","visible");



	}

	this.drawFood = function(color){
		var xStr = this.x+"px";
		var yStr = this.y+"px";

  		$("#food_butt").css("background-color", color);
	    $("#food_butt").css("position", "absolute");
		$("#food_butt").css("left", xStr);
		$("#food_butt").css("top", yStr);
		$("#food_butt").css("width", sizeStr);
		$("#food_butt").css("height",sizeStr);
		$("#food_butt").css("visibility","visible");

	}

	this.equals = function(otherPosition){
		return this.x == otherPosition.x && this.y == otherPosition.y;

	}

	this.randomPower = function(){
	return types[this.color]();

}

	}
