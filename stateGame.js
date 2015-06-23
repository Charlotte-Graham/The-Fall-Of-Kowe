var player = new Player();
var debris = new spawnDebris();

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
	for(var i=0; i<debrisArray.length; i++)
	{
		// update the asteroids position according to its current velocity.
		// TODO: Dont forget to multiply by deltaTime to get a constant speed
		debrisArray[i].x = debrisArray[i].x + debrisArray[i].velocityX;
		debrisArray[i].y = debrisArray[i].y + debrisArray[i].velocityY;
			
		// TODO: check if the asteroid has gone out of the screen boundaries
		// If so, wrap the asteroid around the screen so it comes back from the
		// other side
		//wrap asteroid
		if (debris.width >= canvas.width)
			{
				debris.x = 0;
			}
		else if (debris.width < 0)
			{
				debris.x = canvas.width - 1;
			}
		if (debris.height >= canvas.height)
			{
				debris.y = 0;
			}
		else if (debris.height < 0)
			{
				debris.y = canvas.height - 1;
			}
	}
	var spawnTimer = 0;	
	//spawnTimer
	spawnTimer -= dt;
	if(spawnTimer <= 0)
	{
		spawnTimer = 1;
		spawnDebris();
	}
}

GameState.prototype.draw = function() 
{
	var lives = 3;
	var deltaTime = getDeltaTime();
	var gameTimer = 0;
	//var score = 0;
	var heartImage = document.createElement("img");
	heartImage.src = "hud_heartFull.png";
	
	//var SCREEN_WIDTH = canvas.width;
	//var SCREEN_HEIGHT = canvas.height;
	
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
	context.fillText("Score: " + score, 20, 40, 100);
	
	//life counter
	for(var i=0; i<lives; i++)
	{
		context.drawImage(heartImage, 20 + ((heartImage.width+2)*i), 400);
	}
	/*if(player.isDead == false)
	{
		if(player.position.y > SCREEN_HEIGHT)
		{
				player.isDead == true;
				lives -= 1;
				player.position.set(35, 250);
		}
		if(lives == 0)
		{
			gameState = STATE_GAMEOVER;
			return;
		}		
		
	}*/
	
	for(var i=0; i<debrisArray.length; i++)
	{
		context.drawImage(debrisArray[i].image, debrisArray[i].x, debrisArray[i].y);
	}
	
	//spawnTimer
	/*spawnTimer -= deltaTime;
	if(spawnTimer <= 0)
	{
		spawnTimer = 1;
		spawnDebris();
	}*/
}