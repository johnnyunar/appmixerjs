function getRectangleArea(a, b) {
    return a * b;
}

function generateRectangleAreas() {
    let input = Number(prompt("Kolik chces generovat rovnic?"));
    const exercise1Div = document.getElementById("exercise1");
    exercise1Div.innerHTML = "";
    for (let i = 0; i < input; i++) {
        exercise1Div.innerHTML += `<h2 class="h2">${i}x${2 * i} rectangle area = ${getRectangleArea(i, 2 * i)}</h2>`;
    }
}

const button = document.getElementById("impossibleButton");
button.addEventListener("mouseenter", function (event) {
    let marginLeft = Number(event.target.style.marginLeft.replace("px", "")) + 300;
    event.target.style.marginLeft = marginLeft + "px";
});


