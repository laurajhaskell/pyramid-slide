function slidePyramid() {
    let slide = document.getElementById("myRange").value;
    let brick = document.getElementById("brickSymbol").value;
    document.getElementById("sliderValue").innerHTML = slide;
    drawPyramid(slide, brick);
}


function drawPyramid(myRange, brickSymbol) {
    document.getElementById("pyramid").innerHTML = "";
    for (var row = 0; row < myRange; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = myRange - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickSymbol;
        }

        //create text element with string of chars
        rowElem = document.createElement("p");
        //create <p> element with text inside
        rowElem.innerHTML = rowStr;
        //insert paragraph as child of <div> container
        document.getElementById("pyramid").appendChild(rowElem).style.textAlign = "right";
    }
}

