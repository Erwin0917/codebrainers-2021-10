function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}
function array () {
    const arr = [];
    const nonEmptyArr = ['kasia', 'janek', 'zosia', [1, 3, 4]];
    const arrExample = new Array(5);

// console.log(nonEmptyArr[0]);

// console.log(arrExample);

//push() pop()
    console.log(nonEmptyArr.push('dawid'));
    console.log(nonEmptyArr);

    console.log(nonEmptyArr.pop());
    console.log(nonEmptyArr);

//unshift() shift()
    console.log(nonEmptyArr.unshift('ernest'));
    console.log(nonEmptyArr);

    nonEmptyArr[3][2];

    console.log("========================");
    console.log(nonEmptyArr.splice(2, 2));
    const clone = nonEmptyArr;
    console.log(nonEmptyArr);

    console.log("========================");
    console.log(nonEmptyArr.indexOf('ernest'));
    console.log(nonEmptyArr.indexOf('adam'));

    console.log(nonEmptyArr.includes('ernest'));
    console.log(nonEmptyArr.includes('adam'));

}

//Maszyna losująca ma 49 nr ,
// losujemy 6 piłeczek
// Podajemy kupon z wpisanymi naszymi 6 numerami
//Ile razy ma miejsce losowanie aby nasze 6 cyfr było wylosowane?

const numbers = [];
function fillNumbers() {
    for (let i = 1; i <= 49; i++) {
        numbers.push(i);
    }
}
fillNumbers();
console.log(numbers)

const myDrownNumbers = [];
function drownNumbers() {
    for (let i = 1; i <= 6; i++) {
        const indexNumber = getRandomNumberBetween(0,49 - i);
        const spliceCatcher = numbers.splice(indexNumber, 1);
        myDrownNumbers.push(...spliceCatcher);

    }

}
drownNumbers()
console.log('myDrownNumbers', myDrownNumbers)
console.log('numbers', numbers)

