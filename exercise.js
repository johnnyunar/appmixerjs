function getInput(count) {
    let result = [];

    for (let i = 0; i < count; i++) {
        const input = prompt(`Zadej ${i + 1}. cislo:`);
        result.push(Number(input));
    }

    return result;
}

function max(arr) {
    let maxNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    return maxNum;
}

function min(arr) {
    let minNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }

    return minNum;
}

function isInArray(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return true;
        }
    }

    return false;
}

function secondMax(arr) {
    // FIXME
    let maxNum = arr[0];
    let secondMaxNum = arr[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        } else if (secondMaxNum < arr[i] < maxNum){
            secondMaxNum = arr[i];
        }
    }

    return secondMaxNum;
}

function largerThan(num, arr){
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num){
            count++;
        }
    }

    return count;
}

function sortArr(arr){

}

const arraySize = Number(prompt('Kolik cisel chces zadat?'));
inputArr = getInput(arraySize);
alert('Nejvetsi cislo je ' + max(inputArr));
alert('Druhe nejvetsi cislo je ' + secondMax(inputArr));
alert('Nejmensi cislo je ' + min(inputArr));
alert('Pocet cisel vetsich nez 10 je ' + largerThan(10, inputArr));