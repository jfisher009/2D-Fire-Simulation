// File: FireSimTile.js
// Author: Julian M. Fisher
// Date: 07/04/2021
// 
// Description: Defines a class that extends Tile to have properties to work in 
//              the fire simulation


// lists of colors to choos from for each state
const FIRE_COLORS = ["red","yellow","white","orange"]
const FUEL_COLORS = ["Brown","SaddleBrown","SandyBrown"]
const ASH_COLORS = ["Black","Gray","SlateGray","DarkSlateGray"]

// static variables for state of tile 
const FUEL = "fuel"
const FIRE = "fire"
const ASH = "ash"

// static variables for the chance of a fuel tile to catch on fire if another fire tile is nearby
const CHANCE_TO_CATCH = 0.1;

// Static variable for the chance of a fire tile to turn to ash every frame
const CHANCE_TO_EXTINGUISH = .02;

// Class: FireSimTile
// Makes a tile that starts as fuel for the fire
class FireSimTile extends Tile{

    // Make a fuel tile that starts out as brown to represents wood
    constructor(){
        super();
        this.state = FUEL;
    }

    // Draw the tile on the board, at the given location with the given side length.
    // Parameters:
    //  xCoor: The x coordinate of the upper left corner of the Tile
    //  yCoor: The y coordinate of the upper left corner of the Tile
    //  sideLenfth: the length in pixels of the Tile to be drawn
    show(xCoor, yCoor, sideLength){
        //if the tile is on fire, choose a random color to give burning effect
        if(this._state === FIRE_STATE){
            //select a random color to draw
            this.color = FIRE_COLORS[Math.floor(Math.random() * FIRE_COLORS.length)];

            //call the super Class's show function
            super.show(xCoor, yCoor, sideLength);
        }
        // other wise, show normally
        else{
            super.show(xCoor, yCoor, sideLength);
        }
    }

    // Update the state of the tile based on the current state of the tile, and whether a fire
    // tile is nearby
    // Parameters:
    //  fireNearby: Boolean variable telling if a fire tile is near the current tile
    progressState(fireNearby){
        // if fuel is next to fire, there is a chance that it will catch fire
        if(this.state == FUEL && fireNearby && Math.random() <= CHANCE_TO_CATCH){
            this.state = FIRE;
        }
        // fire has a chance to extinguish and turn to ash 
        else if(this.state == FIRE && Math.random() <= CHANCE_TO_EXTINGUISH){
            this.state = ASH;
        }
        // if not fuel near fire, or already on fire, no state change occurs
        return;
    }

    // Getter for the state of the Tile
    get state(){
        return this._state;
    }

    // Setter to set the state of the FireSimTile. Sets the tile to an appropriate color
    // and restricts the allowed states of the tile. 
    // Parameters: 
    //  newState: The new state of the tile to try to update with
    set state(newState){
        //if the new state is FUEL, update tile state and set to an appropriate color
        if(newState.toLowerCase() == FUEL){
            this._state = FUEL;
            this.color = FUEL_COLORS[Math.floor(Math.random() * FUEL_COLORS.length)];
        }
        //if the new state is FIRE, update tile state and set to an appropriate color
        else if(newState.toLowerCase() == FIRE_STATE){
            this._state = FIRE_STATE;
            this.color = FIRE_COLORS[Math.floor(Math.random() * FIRE_COLORS.length)];
        }
        //if the new state is ASH, update tile state and set to an appropriate color
        else if(newState.toLowerCase() == ASH){
            this._state = ASH;
            this.color = ASH_COLORS[Math.floor(Math.random() * ASH_COLORS.length)]
        }
        //if state is not being set to a valid state, do not update the state and print error to console
        else{
            console.log("ERROR: Invalid state. Tile state has not been updated.")
        }
    }
}