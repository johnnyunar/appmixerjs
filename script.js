function getRectangleArea(a, b) {
    return a * b;
}

function generateRectangleAreas() {
    let input = Number(prompt("Kolik chces generovat rovnic?"));
    let exercise1Div = document.getElementById("exercise1");
    exercise1Div.innerHTML = "";
    for (let i = 0; i < input; i++) {
        exercise1Div.innerHTML += `<h2>${i}x${2 * i} rectangle area = ${getRectangleArea(i, 2 * i)}</h2>`;
    }
}


