var sizeStr ="20px";
// position
function position(xOther,yOther){
	this.x=xOther;
	this.y=yOther;


	//this is for the snake 
	this.draw = function(color){
		var xStr = this.x+"px";
		var yStr = this.y+"px";

  		$("#snake_butt").css("background-color", color);
	    $("#snake_butt").css("position", "absolute");
		$("#snake_butt").css("left", xStr);
		$("#snake_butt").css("top", yStr);
		$("#snake_butt").css("width", sizeStr);
		$("#snake_butt").css("height",sizeStr);
		$("#snake_butt").css("visibility","visible");


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

	}