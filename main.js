// Imports
const {Artboard, Line, Color} = require("scenegraph");
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

function addBlankSlide(selection, documentRoot){
    let slide = new Artboard();

    slide.width = 1920;
    slide.height = 1080;

    slide.name = "Blank Slide";
    slide.fill = new Color("#FFFFFF");

    //try to get all the artboards
    let artboards = [];
    documentRoot.children.forEach(node =>{
        if(node instanceof Artboard){
            artboards.push(node);
        }
    });

    //get the slide in the far right
    var rightSlideIndex=0;
    for (var i=0; i<artboards.length; i++){
        if(artboards[i].globalBounds.x > artboards[rightSlideIndex].globalBounds.x){
            rightSlideIndex = i;
        }
    }

    //get the last slide
    var yy= artboards[rightSlideIndex].globalBounds.y;
    var xx = artboards[rightSlideIndex].globalBounds.x + artboards[rightSlideIndex].globalBounds.width + 100;

    slide.moveInParentCoordinates(xx,yy);

    console.log(artboards[rightSlideIndex].name);

    //add slide to workspace
    selection.editContext.addChild(slide);
}

module.exports = {
    commands : {
        addBlankSlide
    }
};