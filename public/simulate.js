// File: simulate.js
// Author: Julian M. Fisher
// Date: 07/04/2021
// 
// Description: Simulates a fire in 2 dimensions that spreads across the canvas

const TILE_SIZE = 10;
const NUM_TILES_WIDTH = 50;
const NUM_TILES_HEIGHT = 50;
const FIRE_STATE= "fire"

function setup(){
    //setup canvas and set framerate
    createCanvas(NUM_TILES_WIDTH * TILE_SIZE, NUM_TILES_HEIGHT * TILE_SIZE);
    frameRate(20);

    //generate the 2d array of tiles
    tiles = [];
    row = [];
    for(let j = 0; j < NUM_TILES_HEIGHT; j++){
        row = [];
        for(let i = 0; i < NUM_TILES_WIDTH; i++){
            row.push(new FireSimTile());
        }
        tiles.push(row);
    }

    //choose a random space to start the fire
    tiles[Math.floor(Math.random() * tiles.length)][Math.floor(Math.random() * tiles[0].length)].state = FIRE_STATE;
}

function draw(){
    background(220)
    for(let j = 0; j < tiles.length; j++){
        for (let i = 0; i < tiles[0].length; i++){
            //assume there is no fire nearby
            let fireNearby = false;

            //make appropriate check to not refference a tile that is out of bounds
            //and set fireNearby to True if it is fire
            if(j != 0 && tiles[j - 1][i].state == FIRE_STATE){
                fireNearby = true;
            }
            if(j != tiles.length - 1 && tiles[j + 1][i].state == FIRE_STATE){
                fireNearby = true;
            }
            if(i != 0 && tiles[j][i - 1].state == FIRE_STATE){
                fireNearby = true;
            }
            if(i != tiles[0].length - 1 && tiles[j][i + 1].state == FIRE_STATE){
                fireNearby = true;
            }
            if(j != 0 && i != 0 && tiles[j - 1][i - 1].state == FIRE_STATE){
                fireNearby = true;
            }
            if(j != tiles.length - 1 && i != 0 && tiles[j + 1][i - 1].state == FIRE_STATE){
                fireNearby = true;
            }
            if(j != 0 && i != tiles[0].length - 1 && tiles[j - 1][i + 1].state == FIRE_STATE){
                fireNearby = true;
            }
            if(j != tiles.length - 1 && i != tiles[0].length - 1&& tiles[j + 1][i + 1].state == FIRE_STATE){
                fireNearby = true;
            }
            
            tiles[j][i].progressState(fireNearby);
            tiles[j][i].show(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE);
        }
    }
}