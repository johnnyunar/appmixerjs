function countOccurrences() {
    let str = document.getElementById('main').textContent.trim().split(/\s+/);
    let obj = {};

    str.forEach(function (el, i, arr) {
        obj[el] = obj[el] ? ++obj[el] : 1;
    });

    let items = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });

    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    return items;
}

function prettyPrintOccurrences(items) {
    let result = "";
    for (const word of items) {
        result += `<tr><td><b>${word[0]}</b></td><td>${word[1]}</td></tr>`
    }

    return result;
}

function countWordsUsingLoops() {
    let h3Elements = document.getElementsByTagName('h3');
    let blockquoteElements = document.getElementsByTagName('blockquote');
    let anchorElements = document.querySelectorAll('#main > a');
    let totalWords = 0;
    for (let i = 0; i < h3Elements.length; i++) {
        totalWords += h3Elements[i].textContent.trim().split(/\s+/).length;
    }
    for (let i = 0; i < blockquoteElements.length; i++) {
        totalWords += blockquoteElements[i].textContent.trim().split(/\s+/).length;
    }
    for (let i = 0; i < anchorElements.length; i++) {
        totalWords += anchorElements[i].textContent.trim().split(/\s+/).length;
    }
    return totalWords;
}

function countWordsUsingDiv() {
    return document.getElementById('main').textContent.trim().split(/\s+/).length;
}


document.getElementById('wordCount').innerHTML = countWordsUsingLoops();
document.getElementById('wordCountInDiv').innerHTML = countWordsUsingDiv();
document.getElementById('wordOccurrences').innerHTML += prettyPrintOccurrences(countOccurrences().slice(0, 10));