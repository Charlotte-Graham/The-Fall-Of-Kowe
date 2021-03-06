var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
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

//-------------------- Don't modify anything above here

//VARIABLES
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;
var score = 0;


var DEBUG = 0; //0 FOR OFF 1 FOR ON: drawing debug info

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var keyboard = new Keyboard();

var stateManager = new StateManager();

stateManager.pushState( new SplashState() );
//stateManager.pushState( new GameState() );
//stateManager.pushState( new OverState() );

var musicBackground;

function initialize()
{
	musicBackground = new Howl(
	{
		urls: ["fuckimusm.ogg"],
		loop: true,
		buffer: true,
		volume: 1
	});
	musicBackground.play();
}

function run() 
{
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();
	var dt = deltaTime;
	
	stateManager.update(deltaTime);
	stateManager.draw();
	
	//fps thingy
	/*fpsTime += deltaTime;
	fpsCount++;
	if(fpsTime >= 1)
	{
		fpsTime -= 1;
		fps = fpsCount;
		fpsCount = 0;
	}*/

	if(DEBUG ==1)
	{
		fpsTime == deltaTime
		fpsCount++;
		if(fpsTime >= 1)
		{
			fpsTime -= 1;
			fps = fpsCount;
			fpsCount = 0;
		}
	
		//draw FPS
		context.fillStyle = "#f00";
		context.font="16px Arial";
		context.fillText("FPS: " + fps, 20, 60, 100);
	}
}

initialize();


//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);