import { BattleGame } from './battleGame.js';

export function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

const game = new BattleGame();
// game.init();


// const promise1 = new Promise((resolve, reject) => {
//     const response = fetch('www.image.jpg');
//
//     if (response.code === 200) {
//         resolve(response.body);
//     } else {
//         reject('Error', response.code);
//     }
// });
//
// promise1
//     .then((response) => {
//         console.log(response);
//     });
//

const newPromiseSolution = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    console.log(response.body);

}

console.log('Start')
newPromiseSolution();
console.log('End');

// console.log(promise1);
// expected output: [object




