function getInputBetween(min, max) {
  let input = prompt("Zadej cislo od " + min + " do " + max + ": ", 5);
  input = Number(input);

  while (input < min || input > max || isNaN(input)) {
    if (input < min || input > max) {
      input = prompt("Nezadal jsi cislo od " + min + " do " + max + "! Zadej cislo  od " + min + " do " + max + ": ", 5);
    } else {
      input = prompt("Nezadal jsi cislo! Zadej cislo  od " + min + " do " + max + ": ", 5);
    }

    input = Number(input);
  }

  return input;
}


let pole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let index = 0; index < pole.length; index++) {
  pole[index] *= index;
}

console.log(pole);


let newInput = getInputBetween(getInputBetween(1, 10), getInputBetween(90, 100));

alert("Zadal jsi cislo " + newInput);

let isBoss = confirm("Are you a boss?");
alert("Are you a boss? " + isBoss + ".");