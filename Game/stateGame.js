var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}



var player = new Player();
//var debris = new spawnDebris();
var debris = {
		image: document.createElement("img"),
		width: 124,
		height: 108,
	};
var powerup = {
		image: document.createElement("img"),
		width: 32,
		height: 32,
	};
var powerdown = {
		image: document.createElement("img"),
		width: 32,
		height: 32,
	};
var deltaTime = getDeltaTime();
var dt = deltaTime;

var spawnTimer = 0;	

var spawnRate=3000;
var lastSpawn=-1;
var lives = 3;
//collision detection
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(y2 + h2 < y1 ||
		x2 + w2 < x1 ||
		x2 > x1 + w1 ||
		y2 > y1 + h1)
	{
		return false;
	}
	return true;
}


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
				debrisArray.splice(i, 1);
				return;
			}
		else if (debris.width < 0)
			{
				debrisArray.splice(i, 1);
				return;
			}
		if (debris.height >= canvas.height)
			{
				debrisArray.splice(i, 1);
				return;
			}
		else if (debris.height < 0)
			{
				debrisArray.splice(i, 1);
				return;
			}
	}
	
	for(var i=0; i<powerupArray.length; i++)
	{
		// update the asteroids position according to its current velocity.
		// TODO: Dont forget to multiply by deltaTime to get a constant speed
		powerupArray[i].x = powerupArray[i].x + powerupArray[i].velocityX;
		powerupArray[i].y = powerupArray[i].y + powerupArray[i].velocityY;
	
		if (powerup.width >= canvas.width)
			{
				powerupArray.splice(i, 1);
				return;
			}
		else if (powerup.width < 0)
			{
				powerupArray.splice(i, 1);
				return;
			}
		if (powerup.height >= canvas.height)
			{
				powerupArray.splice(i, 1);
				return;
			}
		else if (powerup.height < 0)
			{
				powerupArray.splice(i, 1);
				return;
			}
	
	}
	
	for(var i=0; i<powerdownArray.length; i++)
	{
		// update the asteroids position according to its current velocity.
		// TODO: Dont forget to multiply by deltaTime to get a constant speed
		powerdownArray[i].x = powerdownArray[i].x + powerdownArray[i].velocityX;
		powerdownArray[i].y = powerdownArray[i].y + powerdownArray[i].velocityY;
		
		if (powerdown.width >= canvas.width)
			{
				powerdownArray.splice(i, 1);
				return;
			}
		else if (powerdown.width < 0)
			{
				powerdownArray.splice(i, 1);
				return;
			}
		if (powerdown.height >= canvas.height)
			{
				powerdownArray.splice(i, 1);
				return;
			}
		else if (powerdown.height < 0)
			{
				powerdownArray.splice(i, 1);
				return;
			}
	}
}

GameState.prototype.draw = function() 
{
	//if player collides with debris or game timer ends whichever is the preferred choice
	//stateManager.switchState(new OverState());

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

	
	
	//life counter
	for(var i=0; i<lives; i++)
	{
		context.drawImage(heartImage, 20 + ((heartImage.width+2)*i), 400);
	}
	
	//draw debris
	for(var i=0; i<debrisArray.length; i++)
	{
		context.drawImage(debrisArray[i].image, debrisArray[i].x, debrisArray[i].y);
	}
	//check debris-player collision
	for(var i=0; i<debrisArray.length; i++)
	{
		
				if(intersects(debrisArray[i].x, debrisArray[i].y, debrisArray[i].width, debrisArray[i].height,
					player.position.x, player.position.y, player.width, player.height)== true)
				{
				lives -= 1;
				debrisArray.splice(i, 1);
				return;
				//player.isDead == true;
				}
			
	}
	
	//poweuparray
	for(var i=0; i<powerupArray.length; i++)
	{
		context.drawImage(powerupArray[i].image, powerupArray[i].x, powerupArray[i].y);
	}
	for(var i=0; i<powerupArray.length; i++)
	{
		
				if(intersects(powerupArray[i].x, powerupArray[i].y, powerupArray[i].width, powerupArray[i].height,
					player.position.x, player.position.y, player.width, player.height)== true)
				{
				score += 2500;
				context.fillStyle = "#f00";
				context.font="20px Arial";
				context.fillText("+2500", 20, 65, 100);
				powerupArray.splice(i, 1);
				return;
				//player.isDead == true;
				}
			
	}
	//powerdown arrary
	for(var i=0; i<powerdownArray.length; i++)
	{
		context.drawImage(powerdownArray[i].image, powerdownArray[i].x, powerdownArray[i].y);
	}
	for(var i=0; i<powerdownArray.length; i++)
	{
		
				if(intersects(powerdownArray[i].x, powerdownArray[i].y, powerdownArray[i].width, powerdownArray[i].height,
					player.position.x, player.position.y, player.width, player.height)== true)
				{
				score -= 2500;
				context.fillStyle = "#f00";
				context.font="20px Arial";
				context.fillText("-2500", 20, 65, 100);
				powerdownArray.splice(i, 1);
				return;
				//player.isDead == true;
				}
			
	}
	
	//spawnTimer
	/*spawnTimer -= deltaTime;
	if(spawnTimer <= 0)
	{
		spawnTimer = 1;
		spawnDebris();
	}*/
	
	  // get the elapsed time
	var time = Date.now();

        // see if its time to spawn a new object
	if(time>(lastSpawn+spawnRate))
	{
		lastSpawn=time;
		spawnDebris();
		spawnPowerup();
		spawnPowerdown();
	}
		//draw score
	context.fillStyle = "#f00";
	context.font="20px Arial";
	context.fillText("Score: " + score, 20, 40, 100);
	
	
	if(lives == 0)
	{
		stateManager.switchState(new OverState());
	}
	
}