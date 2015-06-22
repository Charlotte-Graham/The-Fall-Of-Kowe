var player = new Player();

var GameState = function() 
{
	this.prototype = BaseState;
}

GameState.prototype.load = function() 
{
	
}

GameState.prototype.unload = function() 
{
	
}

GameState.prototype.update = function(dt) 
{
	player.update(dt);
}

GameState.prototype.draw = function() 
{
	var deltaTime = getDeltaTime();
	var gameTimer = 0;
	//var score = 0;
	
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
	//draw player
	player.draw();
	//draw score
		context.fillStyle = "#f00";
		context.font="20px Arial";
		context.fillText("Score: " + score, 5, 20, 100);
}