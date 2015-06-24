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
}

OverState.prototype.draw = function() 
{
	// Paint canvas black.
	context.fillStyle = "black";
	context.rect(0, 0, canvas.width, canvas.height);
	context.fill();
	
	function stars() 
	{
		// Draw 50 stars.
		for (i = 0; i <= 50; i++) 
		{
		// Get random positions for stars.
		var x = Math.floor(Math.random() * canvas.width)
		var y = Math.floor(Math.random() * canvas.height)
		
		// star colour
		context.fillStyle = "yellow";

		// Give the player some room.
		// if (x < 0 || y < 0) ctx.fillStyle = "black";

		// Draw an individual star.
		context.beginPath();
		context.arc(x, y, 3, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		}
	}
	
	// Paint the starfield.
	stars();
	//draw the score
	context.fillStyle = "#f00";
	context.font="20px Arial";
	context.fillText("Score: " + score, 20, 40, 100);
	//GAME OVER!!!!!!!!!!!!!!!!!!!!
	context.fillStyle = "#ff6c00";
	context.font="76px Hobo Std";
	var width = context.measureText("Game Over!").width;
	context.fillText("Game Over!", canvas.width/2 - width/2, canvas.height/2);
}