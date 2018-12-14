function slidePyramid() {
    let slide = document.getElementById("myRange").value;
    let brick = document.getElementById("brickSymbol").value;
    document.getElementById("slider_value").innerHTML = slide;
    //     output.innerHTML = slider.value;

    // slider.oninput = function() {
    //     output.innerHTML = this.value;
    // }
    drawPyramid(slide, brick);
}



function drawPyramid(myRange, brickSymbol) {
    document.getElementById("pyramid").innerHTML = "";
    for (let row = 0; row < myRange; row++) {
        let numBricks = row + 2;
        let numSpaces = myRange - row - 1;
        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            rowStr += "."; 
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += brickSymbol;
        }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}

