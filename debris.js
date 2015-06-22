var DEBRIS_SPEED = 0.8;
var debrisArray = [];

function rand(floor, ceil)
{
    return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

function spawnDebris()
{
    var type = rand(0, 3);
   
    var debris = {};
    
    debris.image = document.createElement("img");
    debris.image.src = "over.png";
    debris.width = 32;
    debris.height = 32;
    
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
    
    debris.x = x + movX;
    debris.y = y + movY;
    
    debris.velocityX = -dirX * DEBRIS_SPEED;
    debris.velocityY = -dirY * DEBRIS_SPEED;
    
    debris.push(debrisArray);
}
    /*for(var i=0; i<debris.length; i++)
    {
        for(var j=0; j<player.length; j++)
        {
            if(intersects(
                player[j].x, player[j].y,
                player[j].width, player[j].height,
                debris[i].x, debris[i].y,
                debris[i].width, debris[i].height) == true)
            {
                debris.splice(i, 1);
                player.splice(j, 1);
                break;
            }
        }
    }*/
