function getRectangleArea(a, b) {
  return a*b;
}

function generateTriangle(height, side) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle = "*\n";
    }

    return triangle;
}

console.log(getRectangleArea(5, 10));
console.log(generateTriangle(5, "left"));
console.log(generateTriangle(6, "center"));
console.log(generateTriangle(11, "right"));