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

var splashScreen = 
{
	image: document.createElement("img"),
	width: 640,
	height: 525
};

splashScreen.image.src = "splashScreen.png";

var splashTimer = 3;
SplashState.prototype.update = function(dt) 
{
	context.fillStyle = "#003366";
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
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.drawImage(splashScreen.image, 0, 0);
}