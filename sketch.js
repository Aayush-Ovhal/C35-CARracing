
var canvas, backgroundImg, playerCount, database;
var form, player, game;
var gameState = 0; 

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);
}

function draw(){
 
}