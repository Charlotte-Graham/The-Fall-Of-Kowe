var canvas = document.getElementById("gameCanvas");

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var POWERUP_SPEED = 0.8;
var powerupArray = [];

function rand(floor, ceil)
{
    return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

function spawnPowerup()
{
    var type = rand(0, 3);
   
    var powerup = {};
    
    powerup.image = document.createElement("img");
    powerup.image.src = "plus.png";
    powerup.width = 32;
    powerup.height = 32;
    
    var x = SCREEN_WIDTH/2;
    var y = SCREEN_HEIGHT/2;
    
    var dirX = rand(-10, 10);
    var dirY = rand(-10, 10);
    
    var magnitude = (dirX * dirX) + (dirY * dirY);
    if(magnitude != 0)
    {
        var oneOverMag = 1 / Math.sqrt(magnitude);
        dirX *= oneOverMag;
        dirY *= oneOverMag;
    }
    
    var movX = dirX * SCREEN_WIDTH;
    var movY = dirY * SCREEN_HEIGHT;
    
    powerup.x = x + movX;
    powerup.y = y + movY;
    
    powerup.velocityX = -dirX * POWERUP_SPEED;
    powerup.velocityY = -dirY * POWERUP_SPEED;
    
    powerupArray.push(powerup);
}