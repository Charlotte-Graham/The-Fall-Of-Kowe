var OverState = function() 
{
	this.prototype = BaseState;
}

OverState.prototype.load = function() 
{
	
}

OverState.prototype.unload = function() 
{
	
}

OverState.prototype.update = function(dt) 
{
	context.fillStyle = "#003300";
	context.fillRect(0, 0, canvas.width, canvas.height);

    gameState = STATE_GAME;
    return;
}

OverState.prototype.draw = function() 
{
	context.fillStyle = "#red";
	context.font="76px Hobo Std";
	var width = context.measureText("Game Over").width;
	context.fillText("Game Over", canvas.width/2 - width/2, canvas.height/2);
}