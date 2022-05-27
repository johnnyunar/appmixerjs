/**

 */
function getRectangleArea(a, b) {
    return a * b;
}

/**

 */
function generateTriangle(height, side) {
    let triangle = ""

    height = height * 2 + 1;

    for (var i = 0; i < height; i += 2) {
        let whitespaceCap;
        if (side === "center") {
            whitespaceCap = ((height - i) / 2)
        } else if (side === "left") {
            whitespaceCap = 0;
        } else {
            whitespaceCap = (height - i);
        }

        for (var k = 0; k < whitespaceCap; k++) {
            triangle += " ";
        }
        for (var j = 1; j < i; j++) {
            triangle += "*";
        }
        triangle += "\n"
    }
    return triangle;
}

let rectangleOutput = document.getElementById("exercise1");
for (let i = 0; i < 10; i++) {
    rectangleOutput.innerHTML += `${i}x${2 * i} rectangle area = ${getRectangleArea(i, 2 * i)}<br/>`;
}


console.log(generateTriangle(5, "left"));
console.log(generateTriangle(6, "center"));
console.log(generateTriangle(11, "right"));

/*
let triangleOutput = document.getElementById("exercise2");
triangleOutput.innerHTML = generateTriangle(5, "left")
triangleOutput.innerHTML += generateTriangle(6, "center")
triangleOutput.innerHTML += generateTriangle(11, "right")
 */