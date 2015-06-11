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
	//context.font="80px Arial";
	//context.fillStyle = "#F8F8FF";
	//var width = context.measureText("TEST SPLASH SCREEN").width;
	//context.fillText("TEST SPLASH SCREEN", SCREEN_WIDTH/2, SCREEN HEIGHT/2)
		context.fillStyle = "#F8F8FF";
		context.font="76px Arial";
		var width = context.measureText("SPLASH SCREEN").width;
		context.fillText("SPLASH SCREEN", canvas.width/2 - width/2, canvas.height/2);
}