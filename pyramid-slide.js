<<<<<<< HEAD
// function show_value(x) {
//     range = document.getElementById("slider_value");
//     range.innerHTML = slider.value;
    
// };


document.getElementById("myRange").oninput = function drawPyramid(myRange) {
        for (let row = 0; row < myRange; row++) {
            let numBricks = row + 2;
            let numSpaces = myRange - row - 1;
            let rowStr = "";
            for (let i = 0; i < numSpaces; i++) {
                rowStr += "."; 
            }
            for (let i = 0; i < numBricks; i++) {
                rowStr += $(this).val();
            }
        }
}


// object.oninput = function drawPyramid(height) {
//     for (let row = 0; row < height; row++) {
//         let numBricks = row + 2;
//         let numSpaces = height - row - 1;
//         let rowStr = "";
//         for (let i = 0; i < numSpaces; i++) {
//             rowStr += "."; 
//         }
//         for (let i = 0; i < numBricks; i++) {
//             rowStr += "#";
//         }
//     }
// }
// object.addEventListener("input", MyScript)
=======
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
>>>>>>> aa39890262e87dab54d59890dfa4f003459553d1

