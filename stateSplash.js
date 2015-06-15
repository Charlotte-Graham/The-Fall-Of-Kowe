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
	context.fillStyle = "#FF6600";
	context.font="76px Hobo Std";
	var width = context.measureText("Fall of Kowe").width;
	context.fillText("Fall of Kowe", canvas.width/2 - width/2, canvas.height/2);
}