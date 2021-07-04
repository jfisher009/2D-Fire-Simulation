// File: block.js
// Author: Julian M. Fisher
// Date: 07/04/2021
// 
// Description: Super class for specific tile types in the simulation


// Class: Tile
// Makes a square of a given color that can 
class Tile{

    // Constructor to make a new Tile
    // Parameters:
    //  color: The color to draw the tile
    constructor(color){
        this._color = color;
    }

    // Draw the tile on the board, at the given location with the given side length.
    // Parameters:
    //  xCoor: The x coordinate of the upper left corner of the Tile
    //  yCoor: The y coordinate of the upper left corner of the Tile
    //  sideLenfth: the length in pixels of the Tile to be drawn
    show(xCoor, yCoor, sideLength){
        fill(this._color);
        stroke(this._color);
        rect(xCoor, yCoor, sideLength, sideLength);
    }

    // Set the color of the Tile
    set color(newColor){
        this._color = newColor;
    }

    // Get the color of the Tile
    get color(){
        return this._color;
    }
}