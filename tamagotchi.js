/**
 * Write given attributes to corresponding HTML elements
 * @param id            {Number}    id of cat's card
 * @param name          {String}    cat's name
 * @param hunger        {Number}    cat's hunger factor
 * @param tiredness     {Number}    cat's tiredness factor
 * @param loneliness    {Number}    cat's loneliness factor
 */
function setCatHTMLAttributes(id, name, hunger, tiredness, loneliness) {
    // We need to find the output elements in our HTML code
    const catNameElement = document.querySelector(`[data-id='${id}'] .cat-name`);
    const catHungerElement = document.querySelector(`[data-id='${id}'] .cat-hunger`);
    const catTirednessElement = document.querySelector(`[data-id='${id}'] .cat-tiredness`);
    const catLonelinessElement = document.querySelector(`[data-id='${id}'] .cat-loneliness`);

    // Then we can write the given attributes inside them.
    // catNameElement.innerHTML = name;

    catNameElement.innerHTML = name;
    catHungerElement.innerHTML = catHungerElement.style.width = hunger + "%";
    catTirednessElement.innerHTML = catTirednessElement.style.width = tiredness + "%";
    catLonelinessElement.innerHTML = catLonelinessElement.style.width = loneliness + "%";

    if (hunger < 50 && tiredness < 50 && loneliness < 50) {
        document.querySelector(`[data-id='${id}'] > img`).src = "images/pleased-cat.gif";
    } else {
        document.querySelector(`[data-id='${id}'] > img`).src = "images/angry-cat.gif";
    }
}

/**
 * Checks if the given number is between min and max. If not, it returns the nearest boundary.
 * @param num {Number} number to check
 * @param min {Number} the low boundary
 * @param max {Number} the high boundary
 * @returns   {Number} the given number if it fits between boundaries or the nearest boundary if not
 */
function checkNumInRange(num, min, max) {
    if (num < min) {
        num = min;
    } else if (num > max) {
        num = max;
    }

    return num;
}

/**
 * Shorthand for checkNumInRange, but for 0 and 100
 * @param     {String} num number to check the boundaries for
 * @returns   {Number}     the given number if it fits between boundaries or the nearest boundary if not
 */
function checkNumBetweenZeroHundred(num) {
    return checkNumInRange(num, 0, 100);
}

/**
 * Does the same as checkNumInRange() but for an Array of numbers
 * @param numbers   {Array[Number]} numbers to check the boundaries for
 * @param min       {Number}        the low boundary
 * @param max       {Number}        the high boundary
 * @returns         {Array[Number]} the same Array but with all numbers between the given boundaries
 */
function checkNumsInRange(numbers, min, max) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = checkNumInRange(numbers[i], min, max);
    }
    return numbers;
}

/**
 * Class representing a single cat to be used in our Tamagotchi game.
 * Each cat has a name and three needs - hunger, tiredness, and loneliness.
 */
class Cat {
    name;
    hunger;
    tiredness;
    loneliness;

    /**
     * When creating a new instance of Cat, we set all their needs to 100%, so the cats are very unsatisfied by default.
     * @param id
     * @param name the cat's name
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.hunger = 100;
        this.tiredness = 100;
        this.loneliness = 100;
    }

    /**
     * Let that cat speak!
     */
    meow() {
        alert("MEOW!");
    }

    /**
     * Checks if all instance's properties are valid percent points (0-100) and if not, sets them to the nearest boundary.
     */
    checkProperties() {
        /*
        Here we are "unpacking" the Array returned by our checkNumsInRange() function.
        This is a shorthand for doing this::

        let newProperties = checkNumsInRange([this.hunger, this.tiredness, this.loneliness], 0, 100);
        this.hunger = newProperties[0];
        this.tiredness = newProperties[1];
        this.loneliness = newProperties[2];
         */
        [this.hunger, this.tiredness, this.loneliness] = checkNumsInRange([this.hunger, this.tiredness, this.loneliness], 0, 100);
        setCatHTMLAttributes(this.id, this.name, this.hunger, this.tiredness, this.loneliness); // Write the cat's needs to the HTML
    }

    /**
     * Feeds the cat.
     */
    feed() {
        this.hunger -= 10;
        this.loneliness -= 5;
        this.tiredness += 5;
        this.checkProperties(); // After each action we check the properties if they did not exceed the boundaries
    }

    /**
     * Pets the cat.
     */
    pet() {
        let wantsTo = Math.random() < 0.5; // 50% chance that the cat wants to be pet.
        if (wantsTo) {
            this.loneliness -= 10;
        } else { // If the cat does not want to, it behaves differently.
            this.loneliness -= 5;
            this.tiredness += 20;
        }
        this.checkProperties(); // After each action we check the properties if they did not exceed the boundaries
    }

    /**
     * Puts the cat to sleep.
     */
    sleep() {
        this.tiredness -= 10;
        this.loneliness += 5;
        this.hunger += 10;
        this.checkProperties(); // After each action we check the properties if they did not exceed the boundaries
    }
}

let myCat = new Cat(0, "Minda"); // Create a new instance of a Cat

let allCats = [myCat];

setCatHTMLAttributes(0, myCat.name, myCat.hunger, myCat.tiredness, myCat.loneliness); // Write the cat's needs to the HTML

document.body.addEventListener("click", function (event) {
    const catId = Number(event.target.parentElement.parentElement.dataset.id);

    const affectedCat = allCats[catId];
    console.log(affectedCat);

    if (event.target.classList[0] === "meow") {
        affectedCat.meow();
    } else if (event.target.classList[0] === "feedButton") {
        affectedCat.feed();
    } else if (event.target.classList[0] === "petButton") {
        affectedCat.pet();
    } else if (event.target.classList[0] === "sleepButton") {
        affectedCat.sleep();
    }
});

const newCardButton = document.getElementById("newCard");
newCardButton.addEventListener("click", function () {
    const newId = allCats.length;
    const name = prompt("Name:");
    const newCat = new Cat(newId, name);
    allCats.push(newCat);

    const firstCard = document.querySelector(".cat-card");
    const firstCardClone = firstCard.cloneNode(true);

    firstCardClone.setAttribute("data-id", allCats.length - 1);

    let catsContainer = document.getElementById("cats-container");
    catsContainer.insertBefore(firstCardClone, catsContainer.lastElementChild);

    setCatHTMLAttributes(newId, newCat.name, newCat.hunger, newCat.tiredness, newCat.loneliness); // Write the cat's needs to the HTML
});