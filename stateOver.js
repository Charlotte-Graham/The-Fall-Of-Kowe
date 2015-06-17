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
	context.fillStyle = "#003300";
	context.fillRect(0, 0, canvas.width, canvas.height);

    gameState = STATE_GAME;
    return;
}

SplashState.prototype.draw = function() 
{
	context.fillStyle = "#FF6600";
	context.font="76px Hobo Std";
	var width = context.measureText("Game Over").width;
	context.fillText("Game Over", canvas.width/2 - width/2, canvas.height/2);
}