var canvas = document.getElementById("gameCanvas");

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var POWERDOWN_SPEED = 0.8;
var powerdownArray = [];

function rand(floor, ceil)
{
    return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

function spawnPowerdown()
{
    var type = rand(0, 3);
   
    var powerdown = {};
    
    powerdown.image = document.createElement("img");
    powerdown.image.src = "minus.png";
    powerdown.width = 32;
    powerdown.height = 32;
    
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
    
    powerdown.x = x + movX;
    powerdown.y = y + movY;
    
    powerdown.velocityX = -dirX * POWERDOWN_SPEED;
    powerdown.velocityY = -dirY * POWERDOWN_SPEED;
    
    powerdownArray.push(powerdown);
}