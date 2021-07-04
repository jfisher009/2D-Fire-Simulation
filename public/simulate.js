// File: simulate.js
// Author: Julian M. Fisher
// Date: 07/04/2021
// 
// Description: Simulates a fire in 2 dimensions that spreads across the canvas

const canvasWidth = 300;
const canvasHeight = 300;

function setup(){
    createCanvas(canvasWidth,canvasHeight);
    frameRate(10);
    tiles = [];
    row = [];
    for(let j = 0; j < canvasHeight / 10; j++){
        row = [];
        for(let i = 0; i < canvasWidth / 10; i++){
            row.push(new Tile(["red","blue","green","purple","pink","orange","yellow","black","white"][Math.floor(Math.random() * 9)]));
        }
        tiles.push(row);
    }
}

function draw(){
    for(let j = 0; j < tiles.length; j++){
        for (let i = 0; i < tiles[0].length; i++){
            tiles[j][i].show(j * 10, i * 10, 10);
            tiles[j][i].color = ["red","blue","green","purple","pink","orange","yellow","black","white"][Math.floor(Math.random() * 9)];
        }
    }
}