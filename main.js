// Imports
const {Line, Color} = require("scenegraph");
const commands = require("commands");


//Helpers

//generate random colour
function randomColor(){
    const col = '#'+Math.floor(Math.random()*16777215).toString(16);
    return col;
}


// Plugin Scaffold
function createLineCommand(selection){
    let line = new Line();

    line.setStartEnd(
        Math.floor(Math.random() * 500),
        Math.floor(Math.random() * 500),
        Math.floor(Math.random() * 500 + 500),
        Math.floor(Math.random() * 500 + 500)
    );

    console.log(line.start.x + " " + line.start.y);

    line.strokeEnabled = true;

    //var col = new Color(randomColor());

    //console.log(col);

    line.stroke = new Color(randomColor());
    line.strokeWidth = 3;
    
    selection.editContext.addChild(line);

    

}

module.exports = {
    commands : {
        createLineCommand
    }
};