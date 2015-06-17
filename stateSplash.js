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

var splashTimer = 3;
SplashState.prototype.update = function(dt) 
{
	context.fillStyle = "#003300";
	context.fillRect(0, 0, canvas.width, canvas.height);

	splashTimer -= dt;
    if(splashTimer <= 0)
    {
        gameState = STATE_GAME;
        return;
    }
}

SplashState.prototype.draw = function() 
{
	context.fillStyle = "#FF6600";
	context.font="76px Hobo Std";
	var width = context.measureText("Fall of Kowe").width;
	context.fillText("Fall of Kowe", canvas.width/2 - width/2, canvas.height/2);
}