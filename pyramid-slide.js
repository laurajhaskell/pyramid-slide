object.oninput = function drawPyramid(height) {
    for (let row = 0; row < height; row++) {
        let numBricks = row + 2;
        let numSpaces = height - row - 1;
        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            rowStr += "."; 
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

object.addEventListener("input", MyScript)

