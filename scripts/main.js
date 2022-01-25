function between(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

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
