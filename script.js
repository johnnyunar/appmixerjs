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

function setCatHTMLAttributes(name, hunger, tiredness, loneliness) {
    const catNameElement = document.getElementById("catName");
    const catHungerElement = document.getElementById("catHunger");
    const catTirednessElement = document.getElementById("catTiredness");
    const catLonelinessElement = document.getElementById("catLoneliness");

    catNameElement.innerHTML = "Name: " + name;
    catHungerElement.innerHTML = "Hunger: " + hunger + "%";
    catTirednessElement.innerHTML = "Tiredness: " + tiredness + "%";
    catLonelinessElement.innerHTML = "Loneliness: " + loneliness + "%";
}

function checkNumInRange(num, min, max) {
    if (num < min) {
        num = min;
    } else if (num > max) {
        num = max;
    }

    return num;
}

function checkNumBetweenZeroHundred(num) {
    return checkNumInRange(num, 0, 100);
}

function checkNumsInRange(numbers, min, max) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = checkNumInRange(numbers[i], min, max);
    }
    return numbers;
}

class Cat {
    name;
    hunger;
    tiredness;
    loneliness;

    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.tiredness = 100;
        this.loneliness = 100;
    }

    meow() {
        alert("MEOW!");
    }

    checkProperties() {
        [this.hunger, this.tiredness, this.loneliness] = checkNumsInRange(
            [this.hunger, this.tiredness, this.loneliness], 0, 100
        );
    }

    feed() {
        this.hunger -= 10;
        this.loneliness -= 5;
        this.tiredness += 5;
        this.checkProperties();
    }

    pet() {
        let wantsTo = Math.random() < 0.5; // 50% chance
        if (wantsTo) {
            this.loneliness -= 10;
        } else {
            this.loneliness -= 5;
            this.tiredness += 20;
        }
        this.checkProperties();
    }

    sleep() {
        this.tiredness -= 10;
        this.loneliness += 5;
        this.hunger += 10;
        this.checkProperties();
    }
}

let myCat = new Cat("Minda");

setCatHTMLAttributes(myCat.name, myCat.hunger, myCat.tiredness, myCat.loneliness);

const meowButton = document.getElementById("meow");
meowButton.addEventListener("click", function () {
    myCat.meow();
});

const feedButton = document.getElementById("feedButton");
feedButton.addEventListener("click", function () {
    myCat.feed();
    setCatHTMLAttributes(myCat.name, myCat.hunger, myCat.tiredness, myCat.loneliness);
});

const petButton = document.getElementById("petButton");
petButton.addEventListener("click", function () {
    myCat.pet();
    setCatHTMLAttributes(myCat.name, myCat.hunger, myCat.tiredness, myCat.loneliness);
});

const sleepButton = document.getElementById("sleepButton");
sleepButton.addEventListener("click", function () {
    myCat.sleep();
    setCatHTMLAttributes(myCat.name, myCat.hunger, myCat.tiredness, myCat.loneliness);
});




