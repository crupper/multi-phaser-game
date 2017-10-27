
var socket; // define a global variable called socket 
socket = io.connect(); // send a connection request to the server

//this is just configuring a screen size to fit the game properly
//to the browser
canvas_width = window.innerWidth * window.devicePixelRatio; 
canvas_height = window.innerHeight * window.devicePixelRatio;

//make a phaser game
var game = new Phaser.Game(canvas_width,canvas_height, Phaser.AUTO, 'gameDiv', { preload: preload, createNetworkPackets: createNetworkPackets, update: update, render: render });

var gameProperties = { 
	//this is the actual game size to determine the boundary of 
	//the world
	gameWidth: 4000, 
	gameHeight: 4000,
};


// Variables
var packet
var players
var bullets // this is for testing purposes
var fireButton
var bulletTime





function preload() {
	console.log('preload')
	game.load.image('bullets','bubble.png')
  //game.load.image('bullet','lib/Square.png')
	//game.load.image('bullet','/home/mod/Documents/Square.png')
  //game.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);
}


function render() {

}

// this is the main game state
var main = function(game){
};
// add the 
main.prototype = {
	preload: function() {
		preload()

    },
	//this function is fired once when we load the game
	create: function () {
		console.log("client started");
		//listen to the “connect” message from the server. The server 
		//automatically emit a “connect” message when the cleint connets.When 
		//the client connects, call onsocketConnected.  
		socket.on("connect", onsocketConnected); 
		//createNetworkPackets()
		//while(true) {update()}
		emitParticles()
	}
}

// this function is fired when we connect
function onsocketConnected () {
	console.log("connected to server"); 
}

// wrap the game states.
var gameBootstrapper = {
    init: function(gameContainerElementId){
		game.state.add('main', main);
		game.state.start('main'); 
    }
};;

//call the init function in the wrapper and specifiy the division id 
gameBootstrapper.init("gameDiv");



function createMap() {

}




function createNetworkPackets() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
	//  Our bullet group
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;
  bullets.createMultiple(30, 'bullet');
  bullets.setAll('anchor.x', 0.5);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
	fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update() {
	//  Firing?
	if (fireButton.isDown)
	{
			//fireBullet();
			firePacket()
	}

}


function firePacket () {

	//  To avoid them being allowed to fire too fast we set a time limit
	//  Grab the first bullet we can from the pool

	if (game.time.now > bulletTime) {
		bullet = bullets.getFirstExists(false);
		console.log("fired a packet") 
		if (bullet)
		{
				//  And fire it
				bullet.reset(20, 20);
				bullet.body.velocity.y = -400;
				bulletTime = game.time.now + 200;
		}
	}
}


function resetBullet (bullet) {

//  Called if the bullet goes out of the screen
	bullet.kill();

}

function emitParticles() {
	var emitter = game.add.emitter(game.world.centerX, game.world.centerY, 250);

	emitter.makeParticles('bullets');

	emitter.minParticleSpeed.setTo(-400, -400);
	emitter.maxParticleSpeed.setTo(400, 400);
	emitter.gravity = 0;
	emitter.start(false, 2000, 15);
}
