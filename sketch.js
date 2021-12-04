//TREX GAme by **write your name ** using JS

//Declare variables for game objects and behaviour indicators(FLAGS)
var trex, trexRun, trexDead;
var ground, groundImg, invGround;
var cloud, cloudImage, cloudsGroup;
var obstacle, obsGroup, cactus1, cactus2, cactus3, cactus4, cactus5, cactus6;
var gameOver, reset, resetImg, gameOverImg;
var score, hiScore, displayHS;
var PLAY, END, gameState;
var jumpSound, die, checkPoint;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  trexRun = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trexDead = loadImage("trex_collided.png");

}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a trex sprite

  //creating the ground sprite
 
  
  //creating the invisible ground sprite
  

  //variables for score, highscore values
  
  
  //indicator to check if highscore should be displayed or not
  

  //default value of Gamestate

}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background("white");

  //display Score
  
  //console.log(trex.y);

 
    //Score Calculation
    

    //display High Score or not
   
    //score sound for addition of every 100
   
    //console.log(height);
    //console.log(trex.y);

    //trex behaviour
    
    

    //ground behaviour
    

    //function call to create and move clouds
 

    //function call to create and move obstacles



  drawSprites();
}

//function definition to create and move clouds


//function definition to create and move obstacles



//function to reset score and startOver the game
