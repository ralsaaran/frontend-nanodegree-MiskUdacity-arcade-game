// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = Math.floor((Math.random() * 3) + 150);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if (this.x > 505){
        this.x = 0;
    }
    //call functhion to check for crach
    this.checkCollision();
};

//functhion to check for crach
Enemy.prototype.checkCollision = function(){
    if (player.x < this.x + this.width && player.x + player.width > this.x && player.y < this.y + this.height && player.height + player.y > this.y) {
        player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = 200;
    this.y = 383;
    this.width = 50;
    this.speed = 50;
     this.height = 50;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {
//check if player is win
    if (this.y == -32){
        this.y -= 83;
        this.reset();
        
    }
};

Player.prototype.reset = function(){
    this.x=200;
    this.y=383;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now instantiate your objects.
var enemy0 = new Enemy(-350, 130);
var enemy1 = new Enemy(-350, 60);
var enemy2 = new Enemy(-100, 130);
var enemy3 = new Enemy(0, 200);
var enemy4 = new Enemy(0, 60);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy0, enemy1, enemy2, enemy3, enemy4];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
Player.prototype.handleInput = function(keypress) {
    if(keypress == 'left') {
        if(this.x >= 2){ 
            this.x -= 101;
        }
    }
    
    if(keypress == 'right'){
        if(this.x + 101 <= 420){ 
            this.x += 101;
        }
    }
    
    if(keypress == 'up') {
        if(this.y - 83 > -51){
            this.y -= 83;
        }
    }
    
    if(keypress == 'down') {
        if(this.y < 383){
            this.y += 83;
        }
    }

};

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//dom - cssom - reander path  -  layout - print