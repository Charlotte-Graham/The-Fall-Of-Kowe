var LEFT = 0;
var RIGHT = 1;
var ANIM_WALK_RIGHT = 0;
var ANIM_FALL_RIGHT = 1;
var ANIM_FALL_LEFT = 2;
var ANIM_WALK_LEFT = 3;
var ANIM_IDLE_RIGHT = 4;
var ANIM_IDLE_LEFT = 5;
var ANIM_MAX = 6;

var Player = function(x, y) {
	
	this.sprite = new Sprite("spritesheet.png");
	//walk right
	this.sprite.buildAnimation(14, 3, 72.5, 96, 0.05,
		[0, 1, 2, 3, 4, 5, 14, 15, 16, 17, 18]);
	//fall right
	this.sprite.buildAnimation(14, 3, 72.5, 96, 0.05,
		[6]);
	//fall left
	this.sprite.buildAnimation(14, 3, 72.5, 96, 0.05,
		[7]);
	//walk right
	this.sprite.buildAnimation(14, 3, 72.5, 96, 0.05,
		[13, 12, 11, 10, 9, 8, 27, 26, 25, 24, 23]);
	//idle right
	this.sprite.buildAnimation(14, 3, 72.5, 96, 1,
		[28, 29]);
	//fall left
	this.sprite.buildAnimation(14, 3, 72.5, 96, 0.05,
		[41, 40]);
	
	for(var i=0; i<ANIM_MAX; i++)
	{
		this.sprite.setAnimationOffset(i, -55, -87);
	}
	
	
	this.position = new Vector2();
	this.position.set( 35 , 250 );
	
	this.width = 72.5;
	this.height = 96;
	
	this.velocity = new Vector2();
	
	this.falling = true;
	this.jumping = false;
	
	this.isDead = false;
	
	this.direction = LEFT;
	
	this.cooldownTimer = 0;
};


Player.prototype.update = function(dt)
{
	this.sprite.update(dt);
	
	var left = false;
	var right = false;
	var jump = false;

	var PLAYER_SPEED = 300;
	
	// check keypress events
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
		left = true;
		this.direction = LEFT;
		if(this.sprite.currentAnimation != ANIM_WALK_LEFT)
			this.sprite.setAnimation(ANIM_WALK_LEFT);
			this.x -= PLAYER_SPEED * dt;
	}
}

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}