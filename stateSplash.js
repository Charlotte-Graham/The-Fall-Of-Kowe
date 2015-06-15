var SplashState = function() 
{
	this.prototype = BaseState;
}

SplashState.prototype.load = function() 
{
	
}

SplashState.prototype.unload = function() 
{
	
}

SplashState.prototype.update = function(dt) 
{
	
}

SplashState.prototype.draw = function() 
{
	/*context.font="80px Arial";
	context.fillStyle = "#F8F8FF";
	var width = context.measureText("TEST SPLASH SCREEN").width;
	context.fillText("TEST SPLASH SCREEN", SCREEN_WIDTH/2, SCREEN HEIGHT/2)*/
		//var splash = document.createElement("img");
		//splash.src = "picture.png";

		//context.drawImage(splash);
		context.fillStyle = "#FF6600";
		//context.fillStyle = "picture.png";
		context.font="76px Hobo Std";
		var width = context.measureText("Fall of Kowe").width;
		context.fillText("Fall of Kowe", canvas.width/2 - width/2, canvas.height/2);
}